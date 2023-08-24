import { MDXRemote } from "next-mdx-remote/rsc";
import BlogItem from "@/components/BlogItem";
// import blogs_list from "@/utils/blogs-list";
import { getPostsMeta } from "@/lib/posts";
import "highlight.js/styles/github-dark.css";

const page = async () => {
  const blogs_list = await getPostsMeta();
  console.log(blogs_list);

  return (
    <>
      <section>
        {blogs_list.map((blog) => (
          <BlogItem
            key={blog.meta.id}
            title={blog.meta.title}
            keywords={blog.meta.tags}
            // description={blog.meta.description}
            url={blog.meta.title}
            contents={blog.meta.fileName}
          />
        ))}
      </section>
    </>
  );
};

export default page;
