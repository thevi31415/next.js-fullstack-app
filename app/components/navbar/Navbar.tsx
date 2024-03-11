import Link from "next/link";
import React from "react";
const Navbar = () => {
  // Your Navbar component implementation here
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
