import React from "react";
import * as s from "./Nav.module.scss"
import NavItem from "@/features/Nav/ui/NavItem/NavItem";
import {NAV_ITEM} from "@/features/Nav/constants/constants";
import NavBtn from "@/features/Nav/ui/NavBtn/NavBtn";
import {useNav} from "@/features/Nav/hook/useNav";
import {NavItemType} from "@/features/Nav/type/type";
import {useItemToggle} from "@/features/Nav/hook/useItemToggle";
import Button from "@/components/atoms/Button";
// Nav
export const Nav: React.FC = () => {
	const { navToggle, navToggleHandler} = useNav()
  const { activeId, activeIdHandler} = useItemToggle()

	// Return
	return (
		<nav className={s.nav}>
			<ul className={`${s.navList} ${navToggle ? s.active : ""}`}>

				{NAV_ITEM.map((navItem: NavItemType) => (
					<NavItem key={navItem.id}
					         href={navItem.href}
                   onClick={() => activeIdHandler(navItem.id)}
                   isActive={activeId === navItem.id}
					>
						{navItem.name}
					</NavItem>
				))}
        <div className={s.Connect}>
          <Button href={"#"} children={"Connect"}/>
        </div>
			</ul>
			<NavBtn onClick={navToggleHandler} toggle={navToggle}/>
		</nav>
	)
};

