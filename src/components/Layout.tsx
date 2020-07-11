import styled from "styled-components/macro";
import React from "react";

import Header from "web/components/Header";

// import styles from "./Layout.scss";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children = null }: Props) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px 0 100px 0;
  padding: 0 50px;

  @media only screen and (max-width: 758px) {
    margin: 20px 0 100px 0;
    padding: 0 30px;
  }
`;
