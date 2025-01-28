import React, { ReactNode } from "react";

type TextAlign = "center" | "left" | "right";

interface PrimaryButtonProps {
  onClick?: () => void;
  align: TextAlign;
  children: ReactNode; // Define children as a prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  align,
  children,
}) => {
  return (
    <button
      className={`text-Primary-light font-(--iranSans) bg-Primary-dark py-3 px-8 text-${align} rounded-[16px] cursor-pointer hover:bg-blue-400 transition-colors duration-300 checked:animate-ping  `}
      onClick={onClick}
    >
      {children} {/* Use children here */}
    </button>
  );
};

export default PrimaryButton;
