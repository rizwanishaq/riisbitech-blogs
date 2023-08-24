import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/github-dark.css";
async function fetchRepoContents(blog) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/rizwanishaq/readme_blogs/contents/`
  );
  const contents = await response.json();
  const readme = contents.filter((content) => content.name === `${blog}`)[0];

  const url = readme.download_url;
  const _response = await fetch(url);
  const rawMDX = await _response.text();
  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    options: { parseFrontmatter: true },
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ],
    },
  });

  return { content };
}

const GetReadme = async ({ params, searchParams: { contents } }) => {
  const { content } = await fetchRepoContents(contents);

  return <div className="container px-5 mx-auto mt-5 text-left">{content}</div>;
};

export default GetReadme;
