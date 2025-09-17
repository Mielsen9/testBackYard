import React, {FC} from "react";
import * as s from "./Img.module.scss"
// Type
type PropsType = {
	alt?: string;
	srcWebP?: string;
	srcJpg: string;
	className?: string;
	loading: "eager" | "lazy" | undefined;
};
// Img
const Img: FC<PropsType> = React.memo(({ srcJpg,
                                         srcWebP,
                                         className,
                                         alt,
                                         loading}) => {

	// Return
	return (
		<picture>
			{srcWebP && <source srcSet={srcWebP} type="image/webp" />}
			<source srcSet={srcJpg} type="image/jpeg"/>
			<img src={srcJpg}
			     alt={alt || ""}
			     className={`${s.img} ${className || ""}`.trim()}
			     loading={loading}
			/>
		</picture>
)
});

export default Img