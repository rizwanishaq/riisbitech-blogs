import ListItems from "@/components/ListItems";

const FeaturesSection = () => {
  return (
    <section id="features">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Artificial Intelligence
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Experience the future with our cutting-edge AI solutions!
          </p>
        </div>

        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <ListItems
            number={"01"}
            text={"Artificial Intelligence"}
            description={
              "Experience the future with our cutting-edge AI solutions!"
            }
          />
          <ListItems
            number={"02"}
            text={"MERN Stack"}
            description={
              "Transform Your Web Experience with Our MERN Stack Solutions. Experience Seamless Integration with Mongo, Express, React, and Nodejs"
            }
          />
          <ListItems
            number={"03"}
            text={"Python"}
            description={
              "Achieve unparalleled success with our Python expertise"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
