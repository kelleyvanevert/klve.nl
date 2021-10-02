import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import cx from "classnames";

const menuItems = [
  { title: "About", path: "/" },
  { title: "Photography", path: "/photography" },
  { title: "Sandbox", path: "/projects" },
  { title: "Drawings", path: "/drawings" },
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
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
