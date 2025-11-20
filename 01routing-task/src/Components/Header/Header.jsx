import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About Us",
      to: "/about-us",
    },
    {
      name: "Career",
      to: "/career",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];
  return (
    <ul className="navbar">
      {navItems.map((item, key) => (
        <li className="navItem" key={key}>
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Header;
