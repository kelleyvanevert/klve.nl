import React from "react";
import Head from "next/head";
import "./styles.scss";

import { Layout } from "../layouts/Layout";

type Props<P> = {
  Component: React.ComponentType<P>;
  pageProps: P;
};

export default function App<P>({ Component, pageProps }: Props<P>) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Kelley van Evert</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://use.typekit.net/pak0fwg.css?123"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
