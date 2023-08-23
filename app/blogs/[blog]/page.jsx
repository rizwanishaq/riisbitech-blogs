import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";

async function fetchRepoContents(blog) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/rizwanishaq/${blog}/contents`
  );
  const contents = await response.json();
  const readme = contents.filter((content) => content.name === "README.md")[0];
  const url = readme.download_url;
  const _response = await axios.get(url);
  const markdownText = await _response.data;
  return markdownText;
}

const GetReadme = async ({ params: { blog } }) => {
  const markdown = await fetchRepoContents(blog);

  return (
    <div className="container px-5 mx-auto mt-5 text-left">
      {/* <Markdown>{markdown}</Markdown> */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // rehypePlugins={[rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default GetReadme;
