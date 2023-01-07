import { createContext, ReactNode, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import cx from "classnames";

const menuItems = [
  { title: "Whoami", path: "/", match: /^\/$/ },
  { title: "Music", path: "/music", match: /^\/music/ },
  { title: "Photos", path: "/photography", match: /^\/photography/ },
  { title: "Drawings", path: "/drawings", match: /^\/drawings/ },
  { title: "Doodles", path: "/code", match: /^\/code/ },
];

type Props = {
  children?: ReactNode;
};

const DarkModeContext = createContext(false);

export function useIsDarkMode() {
  return useContext(DarkModeContext);
}

export function Layout({ children }: Props) {
  const darkMode = useDarkMode(undefined, {
    // @ts-ignore
    storageKey: null,
    classNameDark: "dark",
  });

  // useEffect(() => {
  //   darkMode.disable();
  // }, []);

  const router = useRouter();

  return (
    <DarkModeContext.Provider value={darkMode.value}>
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
                    "inline-block relative lowercase font-bold focus:underline text-2xl",
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
    </DarkModeContext.Provider>
  );
}
