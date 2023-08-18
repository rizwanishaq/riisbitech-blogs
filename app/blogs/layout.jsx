import Link from "next/link";

export default async function BlogLayout({ children }) {
  return (
    <>
      <nav className="relative container mx-auto p-6 text-left ">
        <h2 className="text-3xl font-bold text-left">Blogs</h2>
        <p className="text-sm text-darkGrayishBlue">
          Latest blogs with different technologies
        </p>
      </nav>
      {children}
    </>
  );
}
