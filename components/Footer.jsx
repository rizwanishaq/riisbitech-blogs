import Image from "next/image";
import Link from "next/link";
import LinkItem from "./LinkItem";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container*/}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <Image
              src="/assets/images/logo.svg"
              alt="Promptopia Logo"
              width={100}
              height={100}
              className="h-8"
            />
          </div>
          {/* Link */}
          <div className="flex justify-center space-x-4">
            <LinkItem image_src={"/assets/images/icon-facebook.svg"} />
            <LinkItem image_src={"/assets/images/icon-instagram.svg"} />
            <LinkItem image_src={"/assets/images/icon-pinterest.svg"} />
            <LinkItem image_src={"/assets/images/icon-twitter.svg"} />
            <LinkItem image_src={"/assets/images/icon-youtube.svg"} />
          </div>
        </div>
        {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="/" className="hover:text-brightRed">
              Home
            </Link>
            <Link href="/about" className="hover:text-brightRed">
              About
            </Link>
            <Link href="/projects" className="hover:text-brightRed">
              Projects
            </Link>
            <Link href="/blogs" className="hover:text-brightRed">
              Blogs
            </Link>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <Link href="/" className="hover:text-brightRed">
              Careers
            </Link>
            <Link href="/about" className="hover:text-brightRed">
              Community
            </Link>
            <Link href="/projects" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Update in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRed focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
