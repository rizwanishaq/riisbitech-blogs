import Prism from "prismjs";
// import "prismjs/themes/prism-base16-ateliersulphurpool.light.css";
import "prismjs/components/prism-jsx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/atom-one-dark.css";

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
      remarkPlugins: [remarkGfm],
      components: {
        h1: ({ children }) => (
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {children}
          </h1>
        ),
      },
      rehypePlugins: [
        rehypeSlug,
        rehypeHighlight,
        [
          rehypePrettyCode,
          {
            theme: "github-light",
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted");
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"];
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
            behavior: "wrap",
          },
        ],
      ],
    },
  });

  return { frontmatter, content };
}

const GetReadme = async ({ params, searchParams: { contents } }) => {
  const { frontmatter, content } = await fetchRepoContents(contents);

  return (
    <div className="container px-5 mx-auto mt-5 text-left">
      <article>{content}</article>
    </div>
  );
};

export default GetReadme;
