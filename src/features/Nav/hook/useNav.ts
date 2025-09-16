import { useState } from "react";

// useNav
export const useNav = () => {
	const [navToggle, setNavToggle] = useState(false);

	// Функція для перемикання стану навігації
	const navToggleHandler = () => {
		setNavToggle((prev) => !prev);
	};

	return { navToggle, navToggleHandler };
};