import React from "react";
import IconButton from "./iconButton";
import Bell from "../../public/icons/bell.png";
import Search from "../../public/icons/prime_search.png";
import Moon from "../../public/icons/solar_moon-line-duotone.png";
import Logo from "../../public/NavbarLogo.png";
const Navbar = () => {
  return (
    <div className=" flex justify-between py-6 px-5 bg-transparent w-screen  ">
      <div className=" flex gap-4">
        <IconButton
          className=" border-Background-dark bg-Primary-super-light"
          onClick={() => console.log("hello world")}
          icon={Moon}
        />
        <IconButton
          className=" border-Background-dark bg-Primary-super-light"
          onClick={() => console.log("hello world")}
          icon={Bell}
        />
        <SearchInput />
      </div>
          <div className=" flex gap-4 items-center">
              <p className=" text-[20px] font-[500]">بهاره جعفری</p>
              <img src={ Logo  } />
      </div>
    </div>
  );
};

export default Navbar;

function SearchInput() {
  return (
      <div className=" rounded-[8px] bg-Primary-super-light border-[1px] w-[250px] h-[48px] flex py-2 px-3 items-center justify-between ">
          <button><img src={Search} alt="search icon" /></button>
          <input type="text" className=" outline-0 " dir="rtl" />
    </div>
  );
}
