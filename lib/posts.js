import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
export async function getPostByName(file) {
  const url = file.download_url;
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

  const blogPostObj = {
    meta: {
      id: frontmatter._id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      fileName: file.name,
    },
  };

  return blogPostObj;
}

export async function getPostsMeta() {
  const res = await fetch(
    "https://api.github.com/repos/rizwanishaq/readme_blogs/contents/"
  );

  if (!res.ok) return undefined;

  const contents = await res.json();

  const filesArray = contents.filter((content) =>
    content.name.endsWith(".mdx")
  );

  const posts = [];
  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      posts.push(post);
    }
  }

  return posts;
}
