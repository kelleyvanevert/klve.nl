import type { AppProps } from "next/app";
import Head from "next/head";

import "./styles.css";

import { Layout } from "../layouts/Layout";
import { pic } from "../lib/pic";

export default function App({ Component, pageProps }: AppProps) {
  const LayoutComp = (Component as any).disableLayout ? "div" : Layout;

  return (
    <LayoutComp>
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
        <meta property="og:image" content={base(pic.src)} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={"" + pic.width} />
        <meta property="og:image:height" content={"" + pic.height} />
      </Head>
      <Component {...pageProps} />
    </LayoutComp>
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
