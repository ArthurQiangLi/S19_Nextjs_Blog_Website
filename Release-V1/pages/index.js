import Header from "../components/Header";
import Footer from "../components/Footer";
import MarkdownContent from "../components/MarkdownContent";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { MailIcon } from "../components/HeaderIcons";
import { useState } from "react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "pages/main.mdx");
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

const HomePage = ({ mdxSource }) => {
  const [isSpinning, setIsSpinning] = useState(true); // Default: spinning

  return (
    <div>
      <Header />
      <div>
        <main className="home-main">
          <div className="homeSider">
            <img
              src="/main-page/main_left_picture.jpg"
              alt="heroPhoto"
              className={`main-hero-photo ${isSpinning ? "spinning" : ""}`}
            />

            <span className="homeSider-span1">YourName</span>
            <span className="homeSider-span2">YourFullName · Pronouns</span>

            <button onClick={() => setIsSpinning(!isSpinning)} className="button1">
              {isSpinning ? "Stop Spinning" : "Start Spinning"}
            </button>{" "}
            
            <div className="homeSider-span3">
              You Bio, write something cool.
            </div>
            <div className="homeSider-mail">
              <MailIcon />
              <a>email@your.address</a>
            </div>
          </div>
          <div className="markdown-body at-homePage">
            <MarkdownContent mdxSource={mdxSource} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
