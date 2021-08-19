import * as React from "react";
import "../styles/styles.css";

const Header = ({ pageName }) => {
  return (
    <>
      <title>{pageName}</title>
      <div className="header">Reviews</div>
    </>
  );
};
export default Header;
