import React, { ReactNode } from "react";

type TextAlign = "center" | "left" | "right";

interface PrimaryButtonProps {
  onClick?: () => void;
  align: TextAlign;
  icon?: ReactNode;
  children: ReactNode; // Define children as a prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  align,
  icon,
  children,
}) => {
  return (
    <button
      className={`text-Primary-light  ${
        icon && "h-[50px]"
      } flex items-center gap-2 font-(--iranSans) bg-Primary-dark px-6 py-3  lg:px-8 text-${align} rounded-[16px] cursor-pointer hover:bg-blue-400 transition-colors duration-300 checked:animate-ping  `}
      onClick={onClick}
    >
      {children} {/* Use children here */}
      {icon}
    </button>
  );
};

export default PrimaryButton;
