// components/MarkdownContent.js
import { MDXRemote } from "next-mdx-remote";
import { Figure, TwoFigures } from "./Figure";
import Video from "./Video";

// Define the components to pass to MDXRemote
const components = {
  Figure,
  TwoFigures,
  Video,
};

const MarkdownContent = ({ mdxSource }) => {
  return <MDXRemote {...mdxSource} components={components} />;
};

export default MarkdownContent;
