import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import { HambergeIcon, HomeIcon, ProjectsIcon, AboutIcon } from "./HeaderIcons";

const Header = () => {
  const router = useRouter(); // Get current route

  return (
    <header>
      <div className="header-globalBar">
        <div className="header-globalBar-start">
          <button className="header-globalBar-button">
            <HambergeIcon />
          </button>
          <img
            className="header-globalBar-logo"
            src="/header-icons/logo180.png"
            alt="Logo"
          />
          <a className="header-globalBar-myname">YourName</a>
        </div>
        <div className="header-globalBar-end" href="https://github.com/ArthurQiangLi">
          <a href="https://github.com/ArthurQiangLi" className="header-link-text">Go to my GitHub</a>
          <img className="header-globalBar-logo2" src="/github-avator.jpg" alt="toMyGithub"  />
        </div>
      </div>
      <div className="header-localBar">
        <ul>
          <li>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className={router.pathname.startsWith("/articles") ? "active" : ""}
            >
              <ProjectsIcon />
              <span>Projects</span>
              <span className="counter">10</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
              <AboutIcon />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
