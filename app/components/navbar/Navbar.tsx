import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
const Navbar = () => {
  // Your Navbar component implementation here
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
