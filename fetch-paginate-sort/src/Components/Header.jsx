import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <ul
      style={{
        display: "flex",
        padding: "20px",
        borderBottom: "1px solid black",
        justifyContent: "center",
        listStyle: "none",
        gap: "20px",
      }}
    >
      {navItems.map((item, index) => (
        <li key={index}>
          <button onClick={() => navigate(item.path)}>{item.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default Header;
