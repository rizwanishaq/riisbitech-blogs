import Link from "next/link";
import TestimonialItem from "./TestimonialItem";

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testimonials blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different about RiIsBiTech
        </h2>
        {/* Testimonials Container  */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <TestimonialItem
            img_src={"/assets/images/logo.svg"}
            name={"Decades of Expertise - 8+ Years and Counting"}
            text={
              "“Unleash the potential of full stack machine learning with our decade-long expertise in delivering successful projects.”"
            }
          />

          {/* Testimonial 2 */}
          <TestimonialItem
            img_src={"/assets/images/logo.svg"}
            name={
              "Unleashing the Power of a Global Reach - Serving the World Wide"
            }
            text={
              "“xperience the power of our global reach as we expand horizons and serve clients all over the world, delivering top-notch services and solutions to a diverse range of industries and markets.”"
            }
            hidden={true}
          />

          {/* Testimonial 3 */}
          <TestimonialItem
            img_src={"/assets/images/logo.svg"}
            name={"Elite Services - 5-Star Quality Guaranteed"}
            text={
              "“Our dedication to delivering the highest quality services has earned us a reputation for excellence, consistently receiving top ratings and praise from our satisfied clients. Trust in our 5-star service to exceed your expectations every time.”"
            }
          />
        </div>
        {/* Button */}
        <div className="my-16">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
            <Link href="/">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
