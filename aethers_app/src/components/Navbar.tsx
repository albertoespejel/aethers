"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const menuItems = ["Tech", "Music"]; // Add new pages here
  const [gamingOpen, setGamingOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-0 py-0 text-[var(--foreground)] fixed top-0 left-0 w-full z-50" style={{backgroundColor: "#0a0a0a", fontFamily: "var(--font-geist-mono)",}}>
      {/* Logo Section */}
      <div className="flex items-center gap-x-0 flex-shrink-0 min-w-0 sm:ml-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SPN Icon"
            width={70}
            height={70}
            className="rounded-full sm:width-[100px] sm:height-[100px]"
          />
          <Image
            src="/images/textwhite.png"
            alt="Aethers Media"
            width={210}
            height={50}
            className="hidden sm:block"
          />
        </Link>
      </div>

      {/* Search Bar (desktop) */}
      <div className="hidden sm:flex flex-1 justify-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs md:max-w-sm lg:max-w-md px-3 py-1 rounded bg-[#222] text-white border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Menu Section */}
      <ul className="flex items-center gap-x-4 sm:gap-x-8 pr-6 text-sm">
        {/* Search Icon (mobile only) */}
        {/* Ommiting the search icon for phone view
        <li className="block sm:hidden">
          <button className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </li>
        */}
        {menuItems.map((item, idx) => (
          <React.Fragment key={item}>
            <li className="flex items-center">
              <Link href={`/${item.toLowerCase()}`} className="hover:underline">
                {item}
              </Link>
            </li>
            {idx < menuItems.length - 1 && (
              <li aria-hidden className="flex items-center">
                <span className="h-4 w-px bg-red-600 inline-block" />
              </li>
            )}
          </React.Fragment>
        ))}

        <li aria-hidden className="flex items-center">
          <span className="h-4 w-px bg-red-600 inline-block" />
        </li>
        {/* Gaming Dropdown */}
        
        <li
          className="relative group"
          tabIndex={0}
        >
          <span
            className="hover:underline cursor-pointer"
            onClick={() => setGamingOpen((open) => !open)}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setGamingOpen((open) => !open);
            }}
          >
            Gaming
          </span>
          <ul
            className={`
              absolute right-0 mt-2 bg-[#0a0a0a] border border-gray-700 rounded shadow-lg z-10 min-w-[180px]
              ${gamingOpen ? "block" : "hidden"}
              group-hover:block
              transition-opacity
              pointer-events-auto
            `}
          >
            <li>
              <Link
                href="/gaming/death-stranding"
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={() => setGamingOpen(false)}
              >
                Death Stranding
              </Link>
            </li>
            {/* Add more games here */}
          </ul>
        </li>

        <li>
          <a
            href="/.auth/login/google"
            className="flex items-center hover:underline"
            title="Login with Google"
          >
            {/* Replace the SVG below with your Heroicons SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;