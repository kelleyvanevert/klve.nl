import type { AppProps } from "next/app";
import Head from "next/head";

import "./styles.css";

import { Layout } from "../layouts/Layout";

export default function App<P>({ Component, pageProps }: AppProps) {
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
