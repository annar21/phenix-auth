import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({children, onClick, className}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl py-2 hover:bg-[#ececec] transition-all duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button