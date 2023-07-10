// Stole this from
// https://github.com/iamacup/react-native-markdown-display/blob/master/src/index.js

const regSelectOpenClose = /_open|_close/g;

/**
 *
 * @example {
    "type": "heading_open",
    "tag": "h1",
    "attrs": null,
    "map": [
      1,
      2
    ],
    "nesting": 1,
    "level": 0,
    "children": null,
    "content": "",
    "markup": "#",
    "info": "",
    "meta": null,
    "block": true,
    "hidden": false
  }
 * @param token
 * @return {String}
 */
export default function getTokenTypeByToken(token) {
  let cleanedType = "unknown";

  if (token.type) {
    cleanedType = token.type.replace(regSelectOpenClose, "");
  }

  switch (cleanedType) {
    case "heading": {
      cleanedType = `${cleanedType}${token.tag.substr(1)}`;
      break;
    }
    default: {
      break;
    }
  }

  return cleanedType;
}

function renderInlineAsText(tokens) {
  var result = "";

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === "text") {
      result += tokens[i].content;
    } else if (tokens[i].type === "image") {
      result += renderInlineAsText(tokens[i].children);
    }
  }

  return result;
}

function flattenInlineTokens(tokens) {
  return tokens.reduce((acc, curr) => {
    if (curr.type === "inline" && curr.children && curr.children.length > 0) {
      const children = flattenInlineTokens(curr.children);
      while (children.length) {
        acc.push(children.shift());
      }
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
}

export function cleanupTokens(tokens) {
  tokens = flattenInlineTokens(tokens);
  tokens.forEach((token) => {
    token.type = getTokenTypeByToken(token);

    // set image and hardbreak to block elements
    if (token.type === "image" || token.type === "hardbreak") {
      token.block = true;
    }

    // Set img alt text
    if (token.type === "image") {
      token.attrs[token.attrIndex("alt")][1] = renderInlineAsText(
        token.children
      );
    }
  });

  /**
   * changing a link token to a blocklink to fix issue where link tokens with
   * nested non text tokens breaks component
   */
  const stack = [];
  tokens = tokens.reduce((acc, token, index) => {
    if (token.type === "link" && token.nesting === 1) {
      stack.push(token);
    } else if (
      stack.length > 0 &&
      token.type === "link" &&
      token.nesting === -1
    ) {
      if (stack.some((stackToken) => stackToken.block)) {
        stack[0].type = "blocklink";
        stack[0].block = true;
        token.type = "blocklink";
        token.block = true;
      }

      stack.push(token);

      while (stack.length) {
        acc.push(stack.shift());
      }
    } else if (stack.length > 0) {
      stack.push(token);
    } else {
      acc.push(token);
    }

    return acc;
  }, []);

  return tokens;
}

export class Token {
  constructor(type, nesting = 0, children = null, block = false) {
    this.type = type;
    this.nesting = nesting;
    this.children = children;
    this.block = block;
  }
}

export function groupTextTokens(tokens) {
  const result = [];

  let hasGroup = false;

  tokens.forEach((token, index) => {
    if (!token.block && !hasGroup) {
      hasGroup = true;
      result.push(new Token("textgroup", 1));
      result.push(token);
    } else if (!token.block && hasGroup) {
      result.push(token);
    } else if (token.block && hasGroup) {
      hasGroup = false;
      result.push(new Token("textgroup", -1));
      result.push(token);
    } else {
      result.push(token);
    }
  });

  return result;
}

let uuid = new Date().getTime();

export function getUniqueID() {
  uuid++;
  return `rnmr_${uuid.toString(16)}`;
}

/**
 *
 * @param {Array} parents
 * @param {string} type
 * @return {boolean}
 */
export function hasParents(parents, type) {
  return parents.findIndex((el) => el.type === type) > -1;
}

/**
 *
 * @param {{type: string, tag:string, content: string, children: *, attrs: Array, meta, info, block: boolean}} token
 * @param {number} tokenIndex
 * @return {{type: string, content, tokenIndex: *, index: number, attributes: {}, children: *}}
 */
function createNode(token, tokenIndex) {
  const type = getTokenTypeByToken(token);
  const content = token.content;

  let attributes = {};

  if (token.attrs) {
    attributes = token.attrs.reduce((prev, curr) => {
      const [name, value] = curr;
      return { ...prev, [name]: value };
    }, {});
  }

  return {
    type,
    sourceType: token.type,
    sourceInfo: token.info,
    sourceMeta: token.meta,
    block: token.block,
    markup: token.markup,
    key: getUniqueID() + "_" + type,
    content,
    tokenIndex,
    index: 0,
    attributes,
    children: tokensToAST(token.children),
  };
}

/**
 *
 * @param {Array<{type: string, tag:string, content: string, children: *, attrs: Array}>}tokens
 * @return {Array}
 */
export function tokensToAST(tokens) {
  let stack = [];
  let children = [];

  if (!tokens || tokens.length === 0) {
    return [];
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const astNode = createNode(token, i);

    if (
      !(
        astNode.type === "text" &&
        astNode.children.length === 0 &&
        astNode.content === ""
      )
    ) {
      astNode.index = children.length;

      if (token.nesting === 1) {
        children.push(astNode);
        stack.push(children);
        children = astNode.children;
      } else if (token.nesting === -1) {
        children = stack.pop();
      } else if (token.nesting === 0) {
        children.push(astNode);
      }
    }
  }

  return children;
}
