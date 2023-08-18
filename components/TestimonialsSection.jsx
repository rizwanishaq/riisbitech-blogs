import Link from "next/link";
import TestimonialItem from "./TestimonialItem";

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testimonials blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different about manage
        </h2>
        {/* Testimonials Container  */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <TestimonialItem
            img_src={"/assets/images/avatar-ali.png"}
            name={"Anish Li"}
            text={
              "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
            }
          />

          {/* Testimonial 2 */}
          <TestimonialItem
            img_src={"/assets/images/avatar-anisha.png"}
            name={"Anisha Li"}
            text={
              "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
            }
            hidden={true}
          />

          {/* Testimonial 3 */}
          <TestimonialItem
            img_src={"/assets/images/avatar-richard.png"}
            name={"Richard Watts"}
            text={
              "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
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
