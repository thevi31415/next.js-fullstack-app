import Link from "next/link";
import styles from "./links.module.css";
import Navbar from "../Navbar";
import NavLink from "./navLink/navLink";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.path}></NavLink>
      ))}
    </div>
  );
};
export default Links;
