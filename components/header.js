import Link from "next/link";
import {useState} from "react";
import cn from "classnames";
import Image from "next/image";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  return (
      <header className="bg-gray-700">
        <div
            className="flex flex-wrap items-center justify-between lg:container px-4 py-10 mx-auto md:flex-no-wrap md:px-4">
          <div className="flex items-center">
            <Image
                src="/earth.svg"
                width={60}
                height={60}
                priority
                alt="logo"
            />
            <ul
                className={cn(
                    "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto"
                )}
            >
              <li className="mt-3 md:mt-0 md:ml-9" key="HOME">
                <Link href="/">
                  <a className="block text-white font-bold">HOME</a>
                </Link>
              </li>
              <li className="mt-3 md:mt-0 md:ml-9" key="LOCATIONS">
                <Link href="/location">
                  <a className="block text-white font-bold">LOCATIONS</a>
                </Link>
              </li>
              <div className="relative z-30">
                <svg className="-mr-1 ml-2 h-5 w-5 text-gray-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                     onClick={() => setShowMenu(!showMenu)}
                     viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                  <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
                <div
                    className="absolute -right-28 top-7 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{display: showMenu ? "" : "none"}}
                    role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <a href="/location"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                       role="menuitem">Uganda</a>
                    <a href="/location"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                       role="menuitem">Kenya</a>
                    <a href="/location"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                       role="menuitem">Rwanda</a>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <button className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
                  onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>

          <ul
              className={cn(
                  "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
                  mobileMenuIsOpen ? `block` : `hidden`
              )}
          >
            {[
              {title: "ABOUT US", route: "/about"},
              {title: "CONTACT", route: "/contact"},
              {title: "MY ACCOUNT", route: "/account"},
            ].map(({route, title}) => {
              let colorYellow = ''
              if (title === "MY ACCOUNT") {
                colorYellow = ' md:text-blue-500 '
              }
              return (<li className="mt-3 md:mt-0 md:ml-9" key={route}>
                <Link href={route}>
                  <a className={'block text-white font-bold' + colorYellow}>{title}</a>
                </Link>
              </li>)
            })}
          </ul>
        </div>
      </header>
  );
}
