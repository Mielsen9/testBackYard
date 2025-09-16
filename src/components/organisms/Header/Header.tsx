import * as s from './Header.module.scss'
import Logo from "@/components/atoms/Logo";
import {Nav} from "@/features/Nav";
import Button from "@/components/atoms/Button";
import React from "react";

// Type
interface Props {

}

// Header
const Header: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Header}>
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header