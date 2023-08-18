import Link from "next/link";

const BlogItem = () => {
  return (
    <div className="container px-5 mx-auto mt-5 text-left">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime="2023-08-05T00:00:00.000Z">August 5, 2023</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link
                className="text-gray-900 dark:text-gray-100"
                href="/blogs/release-of-tailwind-nextjs-starter-blog-v2.0"
              >
                Release of Tailwind Nextjs Starter Blog v2.0
              </Link>
            </h2>
            <div className="flex flex-wrap">
              <span className="mr-3 text-sm font-medium uppercase ">
                next-js
              </span>
              <span className="mr-3 text-sm font-medium uppercase ">
                tailwind
              </span>
              <span className="mr-3 text-sm font-medium uppercase ">guide</span>
              <span className="mr-3 text-sm font-medium uppercase ">
                feature
              </span>
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
            Release of Tailwind Nextjs Starter Blog template v2.0, refactored
            with Nextjs App directory and React Server Components setup.Discover
            the new features and how to migrate from V1.
          </div>
        </div>
        <div className="text-base font-medium leading-6">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
            <Link href="/blogs/release-of-tailwind-nextjs-starter-blog-v2.0">
              Read more →
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
