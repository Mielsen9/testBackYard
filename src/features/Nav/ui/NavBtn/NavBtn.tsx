import React from "react";
import * as s from "./NavBtn.module.scss"
// Type
type PropsType = {
	onClick: () => void;
	toggle: boolean;
};
// NavBtn
const NavBtn: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<button className={s.mobileNavBtn} onClick={p.onClick}>
			<span className={`${s.navIcon} ${p.toggle ? s.active : ""}`}></span>
		</button>
	)
});

export default NavBtn