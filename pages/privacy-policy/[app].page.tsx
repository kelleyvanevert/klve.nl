import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

type AppInfo = {
  title: string;
};

type Props = {
  info: AppInfo;
};

const APPS: Record<string, AppInfo> = {
  "origami-pixels": {
    title: "Origami Pixels",
  },
  "arabic-words": {
    title: "العربية",
  },
  "perry-16": {
    title: "Perry's 16",
  },
  hexastack: {
    title: "Hexastack",
  },
};

export const getStaticProps: GetStaticProps<Props, { app: string }> = async ({
  params,
}) => {
  if (!params || !APPS[params.app]) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {
      info: APPS[params.app],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(APPS).map((app) => {
    return `/privacy-policy/${app}`;
  });

  return {
    fallback: false,
    paths,
  };
};

export default function PrivacyPolicyPage({ info }: Props) {
  return (
    <div style={{ margin: "0 auto", padding: "0 20px", maxWidth: "740px" }}>
      <h1>Privacy Policy for {info.title}</h1>

      <div style={{ fontSize: "130%", lineHeight: "150%" }}>
        <p>
          Our privacy policy is really simple: we don’t collect or store any of
          your data, or track your usage in any way.
        </p>
        <p>
          This app is just a little coding experiment, it doesn’t provide any
          user-data or profiling features.
        </p>
      </div>
    </div>
  );
}

PrivacyPolicyPage.disableLayout = true;
