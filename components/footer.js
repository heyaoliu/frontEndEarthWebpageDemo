import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-gray-700">
        <div
            className="flex flex-wrap items-center justify-between lg:container px-4 py-10 mx-auto md:flex-no-wrap md:px-4">
          <div className="flex items-center">
            <div>
              <Image
                  src="/earth.svg"
                  width={60}
                  height={60}
                  priority
                  alt="logo"
              />
            </div>
            <Link href="/">
              <a className="md:text-3xl ml-5 text-white mb-1">
                The Beautiful Earth
              </a>
            </Link>
          </div>
          <div className="w-1/3">
            <div className="mt-4 flex content-between">
              <input placeholder="Subscribe to our mailing list"
                     className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-gray-600 text-white placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
              <button className="ml-4 flex-shrink-0 bg-blue-700 text-gray-100 text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
            <div className="mt-2 text-gray-300 text-sm">
              Get latest updates and discount on packages
            </div>
          </div>
        </div>
        <div
            className="text-white flex text-left text-base flex-wrap justify-between lg:container px-4 pb-2 mx-auto md:flex-no-wrap md:px-4">
          <div className="flex justify-between w-1/2">
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold">Category</div>
              <ul className="space-y-1.5">
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Second
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Third
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Forth
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Second
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Third
                  Link
                </li>
              </ul>
            </div>
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold">Category</div>
              <ul className="space-y-1.5">
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Second
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Third
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Forth
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Second
                  Link
                </li>
              </ul>
            </div>
            <div className="h-auto px-3 sm:mt-0">
              <div className="mb-2 font-bold">Category</div>
              <ul className="space-y-1.5">
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Second
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Third
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">Forth
                  Link
                </li>
                <li className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">First
                  Link
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-1/2 justify-around">
            <div className="h-auto">
              <div>
                <div className="text-gray-400 transition-colors duration-200 cursor-default">Category</div>
                <div className="mt-1.5 text-gray-400 transition-colors duration-200">+44-123-1234</div>
              </div>
              <div className="mt-10">
                <div className="text-gray-400 transition-colors duration-200 cursor-default">Email</div>
                <div className="mt-1.5 "><a className="hover:underline text-blue-500"
                                            href="mailto:john@doe.com">john@doe.com</a></div>
              </div>
            </div>
            <div className="h-auto">
              <div className="sm:w-1/2 h-auto">
                <div>
                  <div className="text-gray-400 cursor-default">England</div>
                  <div className="mt-1.5 text-gray-400 w-32">1, New Street <br/>London,UK
                  </div>
                </div>
                <div className="mt-10">
                  <div className="text-gray-400 transition-colors duration-200 cursor-default">Africa</div>
                  <div className="mt-1.5 text-gray-400 w-32">1, New Street<br/> Uganda, Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">*/}
        {/*  <li>*/}
        {/*    Created by{" "}*/}
        {/*    <a href="https://lyp123.com"*/}
        {/*       target="_blank"*/}
        {/*       rel="noopener noreferrer"*/}
        {/*       className="font-bold">*/}
        {/*      Arya*/}
        {/*    </a>*/}
        {/*  </li>*/}

        {/*  <li>*/}
        {/*    <a href="https://github.com/liyipeng123"*/}
        {/*       target="_blank"*/}
        {/*       rel="noopener noreferrer"*/}
        {/*       className="font-bold">*/}
        {/*      GitHub*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <div className="pt-0 bg-gray-600 mt-9">
          <div className="flex pb-5 pt-5
              text-gray-400 text-sm justify-around content-around">
            <div className="leading-9">
              © Copyright 2020 - All Rights Reserved.
            </div>

            <div className="flex-row flex w-48 justify-around">
              <a href="/" className="w-6 mx-1">
                <i className="uil uil-facebook-f text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-200"/>
              </a>
              <a href="/" className="w-6 mx-1">
                <i className="uil uil-twitter-alt text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-200"/>
              </a>
              <a href="/" className="w-6 mx-1">
                <i className="uil uil-youtube text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-200"/>
              </a>
              <a href="/" className="w-6 mx-1">
                <i className="uil uil-linkedin text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-200"/>
              </a>
              <a href="/" className="w-6 mx-1">
                <i className="uil uil-instagram text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-200"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
