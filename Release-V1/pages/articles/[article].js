import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import MarkdownContent from "../../components/MarkdownContent"; // Import the new component
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function getStaticPaths() {
  const blogsDir = path.join(process.cwd(), "blogs"); //cwd() is project root. `.join()` is to make an absolute path to 'blogs/'

  function getArticles(dir, category = "") {
    //Fetch all articles, including those inside subfolders.
    //`readdirSync()` reads every file and folder, (stores to 'file'),
    return fs.readdirSync(dir).flatMap((file) => {
      const fullPath = path.join(dir, file);
      //console.log("#### fullPath=", fullPath, "#file=", file, "#cat=", category);
      if (fs.statSync(fullPath).isDirectory()) {
        //if `fullPath` is a folder
        return getArticles(fullPath, file); //call itself recursively
      }
      return category
        ? `${category}/${file.replace(".mdx", "")}`
        : file.replace(".mdx", "");
      //if is a file, get the name without '.mdx'
    });
  }
  //call function above to get the list of article names
  const paths = getArticles(blogsDir).map((article) => ({ params: { article } }));
  //console.log("###paths=", paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const articlePath = params.article.includes("/")
    ? path.join("blogs", ...params.article.split("/")) + ".mdx" //inside a sub-folder
    : path.join("blogs", `${params.article}.mdx`); //root-level

  let mdxSource = "";
  let isEmpty = false;

  if (fs.existsSync(articlePath)) {
    const fileContent = fs.readFileSync(articlePath, "utf-8");
    const { content } = matter(fileContent);
    if (content.trim()) {
      mdxSource = await serialize(content, {
        mdxOptions: { remarkPlugins: [remarkGfm] },
      });
    } else {
      isEmpty = true;
      //console.log("#2# error1 content empty.");
    }
  } else {
    isEmpty = true;
    //console.log("#2# error2 path:", filePath);
  }

  function getArticles(dir) { //Fetch every article for sidebar
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const articles = {
      categories: {},
      files: [],
    };

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const categoryArticles = fs
          .readdirSync(fullPath)
          .filter((file) => file.endsWith(".mdx"))
          .map((file) => file.replace(".mdx", ""));

        if (categoryArticles.length > 0) {
          articles.categories[entry.name] = categoryArticles;
        }
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        articles.files.push(entry.name.replace(".mdx", ""));
      }
    });
    //console.log("#3# list all article=", articles);
    return articles;
  }

  const articles = getArticles(path.join(process.cwd(), "blogs"));

  return { props: { mdxSource, articles, isEmpty } };
}

const ArticlePage = ({ mdxSource, articles, isEmpty }) => {
  const fileCount = articles.files.length;
  const categoryCount = Object.values(articles.categories).reduce(
    (acc, arr) => acc+arr.length, 0
  );
  const totalCount = fileCount + categoryCount;
  return (
    <>
      <Header articleCounter={totalCount} />
      <main className="article-main">
        <Sidebar articles={articles} />
        <div className="markdown-body at-articlePage">
          {isEmpty ? (
            <p>This article is currently empty.</p>
          ) : (
            <MarkdownContent mdxSource={mdxSource} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
