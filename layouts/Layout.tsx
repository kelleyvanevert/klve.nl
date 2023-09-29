import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import { useDarkMode } from "lib/useDarkMode";

const menuItems = [
  { title: "Whoami", path: "/", match: /^\/$/ },
  { title: "Music", path: "/music", match: /^\/music/ },
  { title: "Photos", path: "/photography", match: /^\/photography/ },
  { title: "Drawings", path: "/drawings", match: /^\/drawings/ },
  { title: "Crochet", path: "/crochet", match: /^\/crochet/ },
  { title: "Doodles", path: "/code", match: /^\/code/ },
];

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  useDarkMode();

  const router = useRouter();

  return (
    <div className="mt-[40px] mb-[100px] px-[24px]">
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
              <Link
                href={item.path}
                className={cx(
                  "inline-block relative lowercase font-bold focus:underline text-[1.3rem]",
                  item.match.test(router.pathname) && "italic"
                )}
              >
                <span>{item.title}</span>.
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
