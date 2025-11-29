import { forwardRef, useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="block font-semibold" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        className={`w-full bg-gray-100 p-2 rounded-lg ${className}`}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
