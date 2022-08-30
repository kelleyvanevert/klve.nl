import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import cx from "classnames";

const menuItems = [
  { title: "About", path: "/" },
  { title: "Photos", path: "/photography" },
  { title: "Doodles", path: "/code" },
  { title: "Drawings", path: "/drawings" },
  { title: "Music", path: "/music" },
];

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  useDarkMode(undefined, {
    // @ts-ignore
    storageKey: null,
    classNameDark: "dark",
  });

  const router = useRouter();

  return (
    <div className="mt-[40px] mb-[100px] px-[50px]">
      <header className="max-w-[800px] mt-[50px] mx-auto">
        <div className="tracking-[1px] font-mono text-[11px]">
          <a href="mailto:hello@klve.nl" className="!text-[#999]">
            hello@<strong className="text-black dark:text-white">klve</strong>
            .nl
          </a>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li className="inline mr-[10px]" key={item.title}>
              <Link href={item.path}>
                <a
                  className={cx(
                    "inline-block relative lowercase font-bold focus:underline text-2xl",
                    item.path === router.pathname && "italic"
                  )}
                >
                  <span>{item.title}</span>.
                </a>
              </Link>
            </li>
          ))}
          {/* <li className="inline">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative font-bold focus:underline text-2xl"
              style={{ fontVariant: "small-caps" }}
              href="https://content.klve.nl/s/cv.pdf"
            >
              <span>CV</span>.
            </a>
          </li> */}
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
