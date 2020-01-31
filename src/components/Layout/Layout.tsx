import React from "react";

import Header from "~/components/Header";

import styles from "./Layout.scss";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children = null }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
