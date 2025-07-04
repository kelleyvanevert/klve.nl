import { memo, useRef, useContext } from "react";
import MarkdownIt from "markdown-it";

import { renderRules } from "./renderRules";
import { AstRenderer } from "./renderer";

import {
  //cleanupTokens,
  tokensToAST,
  groupTextTokens,
} from "./util";
import { ContentBlocksContext } from "./blocks";

const markdownIt = new MarkdownIt({
  html: false,
  breaks: true,
  xhtmlOut: true,
  linkify: true,
});

type Props = {
  source: string; // markdown
  inline?: boolean;
  className?: string;
  contentBlocks?: boolean;
};

export const Markdown = memo(
  ({ source, className, inline = false, contentBlocks = true }: Props) => {
    const blocks = useContext(ContentBlocksContext);

    const renderer = useRef<AstRenderer>(undefined);
    if (!renderer.current) {
      renderer.current = new AstRenderer(
        renderRules,
        contentBlocks ? blocks : {}
      );
    }

    try {
      let tokens = inline
        ? markdownIt.parseInline(source, {})
        : markdownIt.parse(source, {});

      // tokens = cleanupTokens(tokens);
      tokens = groupTextTokens(tokens);
      const astTree = tokensToAST(tokens as any);

      return renderer.current.render(astTree, { inline, className });
    } catch {
      return null;
    }
  }
);

export function markdownToHtml({
  source,
  inline = false,
}: {
  source: string;
  inline?: boolean;
}) {
  return inline
    ? markdownIt.renderInline(source, {})
    : markdownIt.render(source, {});
}
