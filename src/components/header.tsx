import { NavLink } from "react-router";
import PrimaryButton from "./PrimaryButton";
import { HeaderType } from "../types";
const Header = ({ header, buttonText, buttonIcon, path }: HeaderType) => {
  return (
    <div className=" flex items-center justify-between">
      <NavLink to={path}>
        <PrimaryButton align="right" icon={buttonIcon}>
          {buttonText}
        </PrimaryButton>
      </NavLink>{" "}
      <h1 className=" text-[33px] font-[700]">{header}</h1>
    </div>
  );
};

export default Header;
