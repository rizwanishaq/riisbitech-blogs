"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="relative container mx-auto p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="pt-2 flex gap-2 justify-between">
            <Image
              src="/assets/images/logo.svg"
              alt="Promptopia Logo"
              width={30}
              height={30}
            />
            <p className="logo_text">RiIsBiTech</p>
          </div>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/blogs" className="hover:text-darkGrayishBlue">
            Blogs
          </Link>
          <Link href="/projects" className="hover:text-darkGrayishBlue">
            Projects
          </Link>
          <Link href="/about" className="hover:text-darkGrayishBlue">
            About
          </Link>
        </div>
        <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
          <Link href="/">Get Started</Link>
        </button>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className={`${
            isOpen ? "" : "open"
          } block hamburger md:hidden foucs:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md-hidden">
        <div
          id="menu"
          className={`absolute ${isOpen ? "" : "flex"} flex-col items-center ${
            isOpen ? "hidden" : ""
          } self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <Link
            href="/blogs"
            className="hover:text-darkGrayishBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="hover:text-darkGrayishBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-darkGrayishBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
