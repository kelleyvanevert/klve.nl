import { notFound } from "next/navigation";

type AppInfo = {
  title: string;
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

export function generateStaticParams() {
  return Object.keys(APPS).map((app) => ({ app }));
}

type Props = {
  params: Promise<{ app: string }>;
};

export default async function PrivacyPolicyPage({ params }: Props) {
  const { app } = await params;
  const info = APPS[app];

  if (!info) {
    notFound();
  }

  return (
    <div style={{ margin: "0 auto", padding: "0 20px", maxWidth: "740px" }}>
      <h1>Privacy Policy for {info.title}</h1>

      <div style={{ fontSize: "130%", lineHeight: "150%" }}>
        <p>
          Our privacy policy is really simple: we don't collect or store any of
          your data, or track your usage in any way.
        </p>
        <p>
          This app is just a little coding experiment, it doesn't provide any
          user-data or profiling features.
        </p>
      </div>
    </div>
  );
}
