import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
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
      name: "Repost Issue",
      path: "/report-issue",
      active: authStatus,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      active: authStatus,
    },
  ];
  return <div>Header</div>;
}

export default Header;
