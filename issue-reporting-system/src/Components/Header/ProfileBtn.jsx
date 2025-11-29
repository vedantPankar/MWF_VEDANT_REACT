import React, { useState, useRef, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";

function ProfileBtn() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.userData);

  const toggleMenu = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <User className="w-5 h-5" />
        Profile
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg border p-3 text-sm">
          {/* Email */}
          <p className="font-medium text-gray-700">
            {user?.email || "No email"}
          </p>

          <p className="text-gray-500 mb-3">
            Room: <span className="font-medium">{user?.roomNumber || "-"}</span>
          </p>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 text-left text-red-600 hover:bg-red-100 rounded-md transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileBtn;
