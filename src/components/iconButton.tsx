import React from "react";

interface IconButtonProps {
  onClick: () => void;
  icon:string;
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
      className={`flex items-center justify-center w-[48px] h-[48px] rounded-[8px] border-[1px] ${className}`}
      aria-label="Icon button" // Improved accessibility
      >
          <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
