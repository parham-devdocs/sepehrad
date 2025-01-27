import React, {  forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ placeholder }, ref) => {
  return (
    <div className="h-[65px] w-full relative">
      <input
        ref={ref} // Forward the ref
        className="w-full py-2 px-4 border-Primary-light border-2 rounded-[16px] text-Primary-light outline-0 h-full"
              type="text"
              dir="rtl"
        // Spread any additional props
      />
      <label className="text-Background-light font-vazirmatn bg-Background-dark absolute -top-2 right-6 px-4 ">
        {placeholder}
      </label>
    </div>
  );
});

export default Input;
