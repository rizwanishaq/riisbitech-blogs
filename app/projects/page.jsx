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
        title={"Release of Tailwind Nextjs Starter Blog v2.0"}
        keywords={["nextjs", "features", "tailwind"]}
        link_url="/another"
      />
    </section>
  );
};

export default page;
