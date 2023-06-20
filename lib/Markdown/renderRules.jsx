import Link from "next/link";

export const renderRules = {
  // when unknown elements are introduced, so it wont break
  unknown(node, children) {
    return null;
  },

  contentBlock(node, children, blocks) {
    const { name, props = {} } = node.attributes;
    const ContentBlock = blocks[name];
    return ContentBlock ? <ContentBlock key={node.key} {...props} /> : null;
  },

  // The main container
  body(node, children) {
    const Tag = node.attributes.inline ? "span" : "div";
    const { className = "" } = node.attributes;
    return (
      <Tag key={node.key} className={`markdown-content ${className}`}>
        {children}
      </Tag>
    );
  },

  // Headings
  heading1(node, children) {
    return <h1 key={node.key}>{children}</h1>;
  },
  heading2(node, children) {
    return <h2 key={node.key}>{children}</h2>;
  },
  heading3(node, children) {
    return <h3 key={node.key}>{children}</h3>;
  },
  heading4(node, children) {
    return <h4 key={node.key}>{children}</h4>;
  },
  heading5(node, children) {
    return <h5 key={node.key}>{children}</h5>;
  },
  heading6(node, children) {
    return <h6 key={node.key}>{children}</h6>;
  },

  // Horizontal Rule
  hr(node, children) {
    return <hr key={node.key} />;
  },

  // Emphasis
  strong(node, children) {
    return <strong key={node.key}>{children}</strong>;
  },
  em(node, children) {
    return <em key={node.key}>{children}</em>;
  },
  s(node, children) {
    return <sout key={node.key}>{children}</sout>;
  },

  // Blockquotes
  blockquote(node, children) {
    return <blockquote key={node.key}>{children}</blockquote>;
  },

  // Lists
  bullet_list(node, children) {
    return <ul key={node.key}>{children}</ul>;
  },
  ordered_list(node, children) {
    return <ol key={node.key}>{children}</ol>;
  },
  list_item: (node, children) => {
    return <li key={node.key}>{children}</li>;
  },

  // Code
  code_inline(node, children) {
    return <code key={node.key}>{node.content}</code>;
  },
  code_block(node, children) {
    // we trim new lines off the end of code blocks because the parser sends an extra one.
    let { content } = node;

    if (
      typeof node.content === "string" &&
      node.content.charAt(node.content.length - 1) === "\n"
    ) {
      content = node.content.substring(0, node.content.length - 1);
    }

    return <pre key={node.key}>{content}</pre>;
  },
  fence(node, children, blocks) {
    if (node.sourceInfo === "json component") {
      try {
        const data = JSON.parse(node.content);
        const ContentBlock = blocks[data.type || data.name];
        if (ContentBlock) {
          return <ContentBlock key={node.key} {...data} />;
        } else {
          return null;
        }
      } catch {}
      return null;
    }

    // we trim new lines off the end of code blocks because the parser sends an extra one.
    let { content } = node;

    if (
      typeof node.content === "string" &&
      node.content.charAt(node.content.length - 1) === "\n"
    ) {
      content = node.content.substring(0, node.content.length - 1);
    }

    return <pre key={node.key}>{content}</pre>;
  },

  // Tables
  table(node, children) {
    return (
      <table key={node.key} className="table">
        {children}
      </table>
    );
  },
  thead(node, children) {
    return <thead key={node.key}>{children}</thead>;
  },
  tbody(node, children) {
    return <tbody key={node.key}>{children}</tbody>;
  },
  th(node, children) {
    return <th key={node.key}>{children}</th>;
  },
  tr(node, children) {
    return <tr key={node.key}>{children}</tr>;
  },
  td(node, children) {
    return <td key={node.key}>{children}</td>;
  },

  // Links
  link(node, children) {
    const { href } = node.attributes;
    if (href?.match(/^\//)) {
      return (
        <Link key={node.key} href={href} className="link">
          {children}
        </Link>
      );
    } else {
      return (
        <a
          className="link"
          key={node.key}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {children}
        </a>
      );
    }
  },
  blocklink(node, children) {
    return null;
  },

  // Images
  image(node, children) {
    const { src, alt } = node.attributes;
    return <img key={node.key} src={src} alt={alt} />;
  },

  // Text Output
  text(node, children) {
    return <span key={node.key}>{node.content}</span>;
  },
  textgroup(node, children) {
    return <span key={node.key}>{children}</span>;
  },
  paragraph(node, children) {
    return <p key={node.key}>{children}</p>;
  },
  hardbreak(node, children) {
    return <br key={node.key} />;
  },
  softbreak(node, children) {
    return <br key={node.key} />;
  },

  // Believe these are never used but retained for completeness
  pre(node, children) {
    return <pre key={node.key}>{children}</pre>;
  },
  inline(node, children) {
    return <span key={node.key}>{children}</span>;
  },
  span(node, children) {
    return <span key={node.key}>{children}</span>;
  },
};
