import type { AppProps } from "next/app";
import Head from "next/head";
// import "photoswipe/style.css";

import "./styles.css";

import { Layout } from "../layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kelley van Evert</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
