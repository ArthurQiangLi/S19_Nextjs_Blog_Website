import Header from "../components/Header";
import Footer from "../components/Footer";
import MarkdownContent from "../components/MarkdownContent";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "pages/about.mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source); /* file content here */
  // Enable GitHub Flavored Markdown via remark-gfm
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm], // You can add rehypePlugins here if you want
    },
  });

  return {
    props: { mdxSource },
  };
}

const About = ({ mdxSource }) => (
  <div>
    <Header />
    <main className="about-main">
      <div className="markdown-body at-aboutPage">
        <MarkdownContent mdxSource={mdxSource} />
      </div>
    </main>

    <Footer />
  </div>
);

export default About;
