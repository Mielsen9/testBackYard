import React from "react";
import * as s from "./NavItem.module.scss";

// Типи
type PropsType = {
	href?: string;
	id?: string;
  isActive?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

// NavItem
const NavItem: React.FC<PropsType> = React.memo(({ href = "#", id, children, onClick, isActive}) => {
	// Return
	return (
		<li>
			<a href={href} className={`${s.navLink} ${isActive ? s.activeItem : ""}`} onClick={onClick} data-goto={id}>
				{children}
			</a>
		</li>
	);
});

export default NavItem;