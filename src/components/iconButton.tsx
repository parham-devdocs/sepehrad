import React, { ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: string | ReactNode; // Accept both string and ReactNode
  className?: string; // Make className optional
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center lg:w-[48px] lg:h-[48px] w-[38px] h-[38px] rounded-[8px] border-[1px] ${className}`}
      aria-label="Icon button" // Improved accessibility
    >
      {typeof icon === "string" ? (
        <img src={icon} alt="icon" /> // Render img if icon is a string
      ) : (
        icon // Render ReactNode directly
      )}
    </button>
  );
};

export default IconButton;
