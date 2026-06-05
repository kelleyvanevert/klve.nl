import type { Metadata, Viewport } from "next";
import { pic } from "lib/pic";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kelley van Evert",
  description: "Kelley van Evert's personal site",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Kelley van Evert",
    description: "Kelley van Evert's personal site",
    type: "profile",
    url: "https://klve.nl/",
    images: [
      {
        url: `https://klve.nl${pic.src}`,
        width: pic.width,
        height: pic.height,
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://use.typekit.net/pak0fwg.css?123"
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const q = window.matchMedia("(prefers-color-scheme: dark)");
              window._initialDarkMode = q.matches;
              if (q.matches) {
                document.body.classList.add('dark')
              } else {
                document.body.classList.remove('dark')
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
