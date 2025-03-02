import Link from "next/link";
import { useRouter } from "next/router";
import { ArticleIcon, FolderIcon } from "./HeaderIcons";

const Sidebar = ({ articles }) => {
  const router = useRouter();

  // Ensure `articles` always has expected structure
  const { files = [], categories = {} } = articles || {};
  /* First display: Category-Based Articles (Grouped by Folder) */
  /* Then display: Standalone Articles (Files in Root) */
  return (
    <aside className="siderbar1">
      <h3>Projects</h3>
      <ul>
        {files.map((title, index) => {
          const articleUrl = `/articles/${title}`;
          const isActive = router.asPath === articleUrl;

          return (
            <li key={index} className={`siderbar3 ${isActive ? "active" : ""}`}>
              <ArticleIcon />
              <Link href={articleUrl}>{title}</Link>
            </li>
          );
        })}

        {Object.entries(categories).map(([category, articleList]) => (
          <li key={category} >
            <div className="siderbar2">
              <FolderIcon />
              <a>{category}</a>
            </div>
            <ul>
              {articleList.map((title, index) => {
                const articleUrl = `/articles/${category}%2F${title}`;
                const isActive = router.asPath === articleUrl;

                return (
                  <li key={index} className={`siderbar4 ${isActive ? "active" : ""}`}>
                    <ArticleIcon />
                    <Link href={articleUrl}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
