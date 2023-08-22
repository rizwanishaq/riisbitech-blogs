import Link from "next/link";

const BlogItem = ({ title, keywords, description }) => {
  return (
    <div className="container px-5 mx-auto mt-5 text-left mb-5">
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link
                className="text-gray-900 dark:text-gray-100"
                href={`/blogs/${title}`}
              >
                {title}
              </Link>
            </h2>
            <div className="flex flex-wrap">
              {keywords &&
                keywords.map((keyword) => (
                  <span className="mr-3 text-sm font-medium uppercase ">
                    {keyword}
                  </span>
                ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
            {description}
          </div>
        </div>
        <div className="text-base font-medium leading-6">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
            <Link href={`/blogs/${title}`}>Read more →</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
