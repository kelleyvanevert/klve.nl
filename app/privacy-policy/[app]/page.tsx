import { notFound } from "next/navigation";

type AppInfo = {
  title: string;
  texts: string[];
};

const defaultTexts = [
  "Our privacy policy is really simple: we don't collect or store any of your data, or track your usage in any way.",
  "This app is just a little coding experiment. Your data stays on your phone.",
];

const APPS: Record<string, AppInfo> = {
  "origami-pixels": {
    title: "Origami Pixels",
    texts: defaultTexts,
  },
  "arabic-words": {
    title: "العربية",
    texts: defaultTexts,
  },
  "perry-16": {
    title: "Perry's 16",
    texts: defaultTexts,
  },
  hexastack: {
    title: "Hexastack",
    texts: defaultTexts,
  },
  jizhu: {
    title: "JiZhu",
    texts: [
      "My privacy policy is really simple: the app doesn't have user accounts or ask for any personal data, so I can't store or track it either.",
      "I do track crashes though, to improve the app. But you can turn that off in the settings screen.",
      "This app is just a little coding experiment, I have no financial or other evil incentives :)",
    ],
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
        {info.texts.map((text, i) => {
          return <p key={i}>{text}</p>;
        })}
      </div>
    </div>
  );
}
