import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {

  let cssClasses = textOnly ? "text-button" : "button";
//   cssClasses = cssClasses + " " + className
  cssClasses += " " + className;
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
