import type { AppProps } from "next/app";
import Head from "next/head";

import "./styles.css";

import { Layout } from "../layouts/Layout";

import chen1small from "../assets/chen1small.jpg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kelley van Evert</title>
        <meta property="og:title" content="Kelley van Evert" />
        <meta
          property="og:description"
          content="Kelley van Evert's personal site"
        />
        <meta
          property="description"
          content="Kelley van Evert's personal site"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://klve.nl/" />
        <meta property="og:image" content={base(chen1small.src)} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={"" + chen1small.width} />
        <meta property="og:image:height" content={"" + chen1small.height} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

function base(url: string) {
  if (!url.startsWith("http")) {
    url = join("https://klve.nl", url);
  }

  return url;
}

function join(a: string, b: string) {
  return a.replace(/\/$/, "") + "/" + b.replace(/^\//, "");
}
