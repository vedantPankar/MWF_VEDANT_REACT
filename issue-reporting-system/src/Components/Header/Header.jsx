import React from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { useSelector } from "react-redux";
import ProfileBtn from "./ProfileBtn";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Register",
      path: "/register",
      active: !authStatus,
    },
    {
      name: "Report Issue",
      path: "/report-issue",
      active: authStatus,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      active: authStatus,
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
        <ul className="flex gap-5 items-center ">
          {navItems.map((item) =>
            item.active ? (
              <li className="p-2 rounded-lg hover:bg-gray-100" key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <ProfileBtn />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
