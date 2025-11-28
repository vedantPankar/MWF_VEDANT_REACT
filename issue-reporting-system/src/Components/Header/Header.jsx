import React from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

function Header() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <div className="flex justify-between bg-white m-2 px-20 py-2">
      <div>
        <Link to="/" className="flex gap-2 items-center">
          <House className="h-9 w-9 text-white bg-blue-500 rounded-lg p-2" />
          PG Issue Reporter
        </Link>
      </div>
      <ul className="flex gap-5 items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
