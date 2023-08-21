import Projectitem from "@/components/Projectitem";

const page = () => {
  return (
    <section>
      <Projectitem
        title={"ImageGeneration"}
        keywords={["stable diffusion", "hugginface", "generative AI"]}
        description={
          "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1."
        }
        link_url="/image-generation"
      />
      <Projectitem
        title={"WebScrapping"}
        keywords={["jsdom", "data scrapping", "web scraping"]}
        description={"Just a simple way to scrap the web page to get data."}
        link_url="/data-scrapping"
      />
    </section>
  );
};

export default page;
