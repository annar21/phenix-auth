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
        'bg-purple-700 rounded-md py-2 hover:bg-purple-800 transition-all duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button