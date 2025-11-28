import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-white px-4 py-2  border-2 border-gray-100 rounded-xl",
    secoandary:
      "bg-black px-4 py-2 text-white border-2 border-black rounded-xl",
  };
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
