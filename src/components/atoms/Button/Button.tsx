import * as s from './Button.module.scss'
import React from "react";

// Type
interface Props {
  href?: string;
  children: React.ReactNode;
}

// Button
const Button: React.FC<Props> = (props) => {
  const {href, children} = props

  return (
    <a href={href}
       className={s.Button}>
      {children}
    </a>
  );
}

export default Button