import React, { forwardRef, useId } from "react";

function Select({ label, list, options = [], className = "", ...props }, ref) {
  const id = useId();

  return (
    <div>
      {label && (
        <label className="block " htmlFor={id}>
          {label}
        </label>
      )}

      <select
        id={id}
        list={list}
        ref={ref}
        className={`w-full bg-gray-100 p-2 rounded-lg ${className}`}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
