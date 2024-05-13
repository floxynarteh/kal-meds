import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import Menu from "@mui/icons-material/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
          <Link to="/products"> Products</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/products"> Products</Link>
        <button onClick={toggleNavBar}>
          <Menu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
