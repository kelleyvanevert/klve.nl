import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { css, cx } from "linaria";
import useDarkMode from "use-dark-mode";

const menuItems = [
  { title: "About", path: "/" },
  { title: "Photography", path: "/photography" },
  { title: "Sandbox", path: "/projects" },
  { title: "Drawings", path: "/drawings" },
];

type Props = {
  children?: React.ReactNode;
};

export function Layout({ children }: Props) {
  useDarkMode(undefined, {
    // @ts-ignore
    storageKey: null,
  });

  const router = useRouter();

  return (
    <div className={_container}>
      <header className={_header}>
        <div className={_email}>
          <a href="mailto:hello@klve.nl">
            hello@<em>klve</em>.nl
          </a>
        </div>
        <ul className={_menu}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>
                <a className={cx(item.path === router.pathname && "active")}>
                  <span>{item.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}

const _container = css`
  margin: 40px 0 100px 0;
  padding: 0 50px;

  @media only screen and (max-width: 758px) {
    margin: 20px 0 100px 0;
    padding: 0 30px;
  }
`;

const _header = css`
  max-width: 800px;
  margin: 50px auto 0;
`;

const _email = css`
  letter-spacing: 1px;
  font-family: monospace;
  font-size: 11px;

  a {
    text-decoration: none;
    color: #999;

    .dark-mode & {
      color: #888 !important;
    }
  }
  a em {
    font-style: normal;
    font-weight: bold;
    color: #000;

    .dark-mode & {
      color: #fff !important;
    }
  }
`;

const _menu = css`
  margin: 0;
  padding: 0;

  li {
    display: inline;
    list-style: none;
    margin-right: 10px;

    a {
      display: inline-block;
      position: relative;
      text-transform: lowercase;
      font-weight: 800;
      color: #000;
      text-decoration: none;
      font-size: 25px;
      line-height: 30px;

      span:after {
        content: ".";
      }

      &.active span {
        font-style: italic;
      }

      &:focus,
      &:focus span {
        text-decoration: underline;
      }

      .dark-mode & {
        color: #eee !important;
      }
    }
  }
`;
