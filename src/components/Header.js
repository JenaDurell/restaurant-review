import React from "react";
import "../styles/styles.css";
import { Link } from "gatsby";

const Header = ({ pageName }) => {
  return (
    <>
      <title>{pageName}</title>
      <Link to="/" className="header">
        Reviews 
      </Link>
    </>
  );
};
export default Header;
