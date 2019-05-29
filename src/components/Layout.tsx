import React from "react";
import styles from "./Layout.module.scss";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children = null }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
