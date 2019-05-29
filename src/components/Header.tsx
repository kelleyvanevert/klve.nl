import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const menuItems = [
  { title: "about", exact: true, path: "/" },
  { title: "photography", path: "/photography" },
  { title: "sandbox", path: "/projects" }
];

export default function Header() {
  return (
    <section className={cx("wrap", styles.header)}>
      <div className={styles.email}>
        <a href="mailto:hello@kelleyvanevert.nl">
          hello@<em>kelleyvanevert</em>.nl
        </a>
      </div>
      <ul className={styles.menu}>
        {menuItems.map(item => (
          <li key={item.title}>
            <NavLink
              exact={item.exact}
              activeClassName={styles.active}
              to={item.path}
            >
              <span className={styles.up}>{item.title}</span>
              <span className={styles.it}>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
