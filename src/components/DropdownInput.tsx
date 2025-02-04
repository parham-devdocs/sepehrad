import React, { useState } from "react";

function DropdownInput({ text, options }: { text: string; options: string[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // State to control dropdown visibility
  const [selectedOption, setSelectedOption] = useState<string>(""); // State to store the selected option

const handleChangeInput=(option:string)=>{
    setSelectedOption(option)
    setIsDropdownOpen(false)
    console.log(selectedOption)
    console.log(DropdownInput)
}

  return (
    <div className="flex items-center gap-5 text-right">
      <div className="relative">
        {/* Input field */}
        <input
          type="text"
          readOnly // Make the input field read-only
          className="w-[350px] h-[60px] border-[2px] border-Primary-main rounded-[8px] bg-Primary-super-light pl-4 pr-4 text-lg outline-none cursor-pointer"
          value={selectedOption} // Display the selected option in the input field
          onClick={() => setIsDropdownOpen(true)} // Open the dropdown when clicking on the input
        //   onBlur={() => setIsDropdownOpen(false)} // Close the dropdown when losing focus
          name="dropdown"
        />

        {/* Dropdown list */}
        {isDropdownOpen && (
          <ul
            className="absolute w-[350px] mt-2 py-2 bg-white border-[2px] border-Primary-main rounded-[8px] shadow-md z-10"
            onMouseLeave={() => setIsDropdownOpen(false)} // Close the dropdown when the mouse leaves
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100  ${
                  option === selectedOption && "bg-gray-200"
                }`}
               onClick={()=>{handleChangeInput(option)}}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Label */}
      <label htmlFor="dropdown" className="font-[500]">
        {text}
      </label>
    </div>
  );
}

export default DropdownInput;