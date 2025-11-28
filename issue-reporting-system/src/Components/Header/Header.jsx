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
    <div className=" bg-white">
      <div className="flex justify-between mx-20 p-6">
        <div>
          <Link to="/" className="flex gap-2 items-center">
            <House className="text-blue-600" />
            PG Issue Reporter
          </Link>
        </div>
        <ul className="flex gap-5 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
