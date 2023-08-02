"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(1);

  return (
    <nav className="bg-white sticky top-0 z-10 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Simplified className */}
          <div className="flex-shrink-0">
            <Link className=" text-orange-600 font-bold" href="/">
              Taiyo.ai
            </Link>
          </div>

          <div className="hidden lg:flex lg:ml-6">
            <Link
              href="/"
              className={`${
                activeLink === 1 ? "bg-orange-600 text-white" : "text-black"
              } px-4 py-2 text-sm rounded-full font-medium`}
              onClick={() => setActiveLink(1)}
            >
              Home
            </Link>

            <Link
              href="/extra"
              className={`${
                activeLink === 2 ? "bg-orange-600 text-white" : "text-black"
              } px-4 py-2 text-sm rounded-full font-medium`}
              onClick={() => setActiveLink(2)}
            >
              Extra
            </Link>

            <Link
              href="/api/auth/signin"
              className={`${
                activeLink === 3 ? "bg-orange-600 text-white" : "text-black"
              } px-4 py-2 text-sm rounded-full font-medium`}
              onClick={() => setActiveLink(2)}
            >
              Sign In
            </Link>

            <Link
              href="/api/auth/signout"
              className={`${
                activeLink === 4 ? "bg-orange-600 text-white" : "text-black"
              } px-4 py-2 text-sm rounded-full font-medium`}
              onClick={() => setActiveLink(2)}
            >
              Sign Out
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`${
                  activeLink === 1 ? "bg-orange-600 text-white" : "text-black"
                } block px-3 py-2 rounded-full text-base font-medium`}
              >
                Home
              </Link>

              <Link
                href="/extra"
                className={`${
                  activeLink === 2 ? "bg-orange-600 text-white" : "text-black"
                } block px-3 py-2 rounded-full text-base font-medium`}
              >
                Extra
              </Link>

              <Link
                href="/api/auth/signin"
                className={`${
                  activeLink === 3 ? "bg-orange-600 text-white" : "text-black"
                } block px-3 py-2 rounded-full text-base font-medium`}
              >
                Sign In
              </Link>

              <Link
                href="/api/auth/signout"
                className={`${
                  activeLink === 4 ? "bg-orange-600 text-white" : "text-black"
                } block px-3 py-2 rounded-full text-base font-medium`}
              >
                Sign Out
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
