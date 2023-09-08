"use client";
import Projectitem from "@/components/Projectitem";
import projects_list from "@/utils/projects-list";

const page = () => {
  return (
    <section>
      {projects_list.map((project) => (
        <Projectitem
          key={project.title}
          title={project.title}
          keywords={project.keywords}
          description={project.description}
          link_url={project.link_url}
        />
      ))}
    </section>
  );
};

export default page;
