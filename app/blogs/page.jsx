import BlogItem from "@/components/BlogItem";
import blogs_list from "@/utils/blogs-list";

const page = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6 text-left ">
        <h2 className="text-3xl font-bold text-left">Blogs</h2>
        <p className="text-sm text-darkGrayishBlue">
          Latest blogs with different technologies
        </p>
      </nav>
      <section className="divide-y brightRed">
        {blogs_list.map((blog) => (
          <BlogItem
            key={blog.title}
            title={blog.title}
            keywords={blog.keywords}
            description={blog.description}
          />
        ))}
      </section>
    </>
  );
};

export default page;
