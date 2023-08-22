import Projectitem from "@/components/Projectitem";

const page = () => {
  return (
    <section>
      <Projectitem
        title={"Image Generation"}
        keywords={["stable diffusion", "hugginface", "generative AI"]}
        description={
          "Generate the image from the prompt using Stable Diffusion."
        }
        link_url="/projects/image-generation"
        key="/image-generation"
      />
      <Projectitem
        title={"Web Scrapping"}
        keywords={["jsdom", "data scrapping", "web scraping"]}
        description={"Just a simple way to scrap the web page to get data."}
        link_url="/projects/data-scrapping"
        key="/data-scrapping"
      />

      <Projectitem
        title={"Event Detection"}
        keywords={["audio", "tensorflow", "deep learning"]}
        description={"Just a simple way to detect events in audio."}
        link_url="/projects/event-detection"
        key="/event-detection"
      />
    </section>
  );
};

export default page;
