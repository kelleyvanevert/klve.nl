import styled from "styled-components/macro";
import React from "react";
import { NavLink } from "react-router-dom";

// import styles from "./Header.scss";

const menuItems = [
  { title: "About", exact: true, path: "/" },
  { title: "Photography", path: "/photography" },
  { title: "Sandbox", path: "/projects" },
  { title: "Drawings", path: "/drawings" },
];

export default function Header() {
  return (
    <Container className="wrap">
      <Email>
        <a href="mailto:hello@kelleyvanevert.nl">
          hello@<em>kelleyvanevert</em>.nl
        </a>
      </Email>
      <Menu>
        {menuItems.map((item) => (
          <li key={item.title}>
            <NavLink exact={item.exact} to={item.path}>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </Menu>
    </Container>
  );
}

const Container = styled.header`
  max-width: 800px;
  margin-top: 50px;
`;

const Email = styled.div`
  letter-spacing: 1px;
  font-family: monospace;
  font-size: 11px;

  a {
    text-decoration: none;
    color: #999;
  }
  a em {
    font-style: normal;
    font-weight: bold;
    color: #000;
  }
`;

const Menu = styled.ul`
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
      font-weight: 600;
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
    }
  }
`;
