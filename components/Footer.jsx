import Image from "next/image";
import Link from "next/link";
import LinkItem from "./LinkItem";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container relative flex flex-col justify-between px-6 py-5 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="flex justify-center space-x-4">
            <LinkItem image_src={"/assets/images/icon-facebook.svg"} />
            <LinkItem image_src={"/assets/images/icon-instagram.svg"} />
            <LinkItem image_src={"/assets/images/icon-pinterest.svg"} />
            <LinkItem image_src={"/assets/images/icon-twitter.svg"} />
            <LinkItem image_src={"/assets/images/icon-youtube.svg"} />
          </div>
        </div>
        <div className="mx-auto my-0 text-center text-white">
          Copyright &copy; 2023, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
