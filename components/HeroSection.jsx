import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view. Goals are automatically
            synced between members.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
              <Link href="/">Get Started</Link>
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <Image
            src="/assets/images/illustration-intro.svg"
            alt="Intro Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
