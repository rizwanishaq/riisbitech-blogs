import ListItems from "@/components/ListItems";

const page = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Full Stack AI Engineer
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            I am a versatile full-stack engineer, adept at shepherding machine
            learning projects from inception to reality. My proficiency spans
            Python, Node.js, React.js, Next.js, and LangChain. Specialized tools
            like PyTriton, Nvidia Triton, Hugging Face, and OpenAI enhance my
            repertoire. I wield TensorFlow and PyTorch fluently, and seamlessly
            manage data with MongoDB and Firebase. GitHub, Docker, gRPC
            streamline my workflow, while ElasticSearch optimizes data
            retrieval. Communication thrives through RabbitMQ and Redis. My
            expertise converges to craft, deliver, and elevate top-notch web
            products.
          </p>
          {/* <div className="flex justify-center md:justify-start">
            <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
              <Link href="/">Get Started</Link>
            </button>
          </div> */}
        </div>

        {/* Image */}

        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <ListItems
            number={"01"}
            text={"Full-Stack Mastery"}
            description={
              "Proficient in Python, Node.js, React.js, Next.js, and LangChain, crafting end-to-end solutions."
            }
          />
          <ListItems
            number={"02"}
            text={"Machine Learning Excellence"}
            description={
              "Leveraging PyTriton, Nvidia Triton, Hugging Face, and OpenAI to create powerful ML applications."
            }
          />
          <ListItems
            number={"03"}
            text={"Deep Learning Prowess"}
            description={
              "Skilled in TensorFlow and PyTorch for cutting-edge deep learning model development."
            }
          />
          <ListItems
            number={"04"}
            text={"Efficient Data Management"}
            description={
              "Experienced with MongoDB and Firebase, ensuring seamless data organization."
            }
          />
          <ListItems
            number={"05"}
            text={"Streamlined Deployment"}
            description={
              "Utilizing GitHub, Docker for version control and ElasticSearch for optimized data retrieval."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default page;
