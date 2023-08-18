import Image from "next/image";

const TestimonialItem = ({ img_src, name, text, hidden }) => {
  return (
    <div
      className={`${
        hidden ? "flex" : "hidden md:flex"
      }  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3`}
    >
      <Image
        src={img_src}
        alt="Intro Illustration"
        width={500}
        height={500}
        className="w-16 -mt-14"
      />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{text}</p>
    </div>
  );
};

export default TestimonialItem;
