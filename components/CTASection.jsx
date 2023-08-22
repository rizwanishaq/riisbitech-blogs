import Link from "next/link";

const CTASection = () => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplyfy your work with our AI-powered tools
        </h2>
        {/* Button */}
        <div className="my-16">
          <button className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl hover:bg-gray-900">
            <Link href="/">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
