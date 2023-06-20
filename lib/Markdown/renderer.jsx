import { getUniqueID } from "./util";

export class AstRenderer {
  constructor(renderRules, blocks) {
    this.renderRules = { ...renderRules };
    this.blocks = blocks; // Record<string, ComponentType<any>>
  }

  getRenderFunction(type) {
    const renderFunction = this.renderRules[type];

    if (!renderFunction) {
      console.warn(
        `Warning, unknown render rule encountered: ${type}. 'unknown' render rule used (by default, returns null - nothing rendered)`
      );
      return this.renderRules.unknown;
    }

    return renderFunction;
  }

  renderNode(node, parentNodes) {
    const renderFunction = this.getRenderFunction(node.type);
    const parents = [...parentNodes];

    parents.unshift(node);

    // calculate the children first
    let children = node.children.map((value) => {
      return this.renderNode(value, parents);
    });

    return renderFunction(node, children, this.blocks);
  }

  render(nodes, { inline, className }) {
    const root = {
      type: "body",
      attributes: { inline, className },
      key: getUniqueID(),
      children: nodes,
    };
    return this.renderNode(root, [], true);
  }
}
