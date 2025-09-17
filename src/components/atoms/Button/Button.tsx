import * as s from './Button.module.scss'
import React from "react";

// Type
interface Props {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

// Button
const Button: React.FC<Props> = ({ href,
                                   children,
                                   className}) => {

  return (
    <a href={href}
       className={`${s.Button} ${className || ""}`.trim()}>
      {children}
    </a>
  );
}

export default Button