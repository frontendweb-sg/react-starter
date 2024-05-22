import {memo} from "react";

import classNames from "classnames";

const iconColorMaping = {
	danger: "text-red-700",
	success: "text-green-700",
};
type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof iconColorMaping;
};
const IconButton = memo(function IconButton({
	children,
	color = "success",
	...rest
}: IconButtonProps) {
	return (
		<button
			className={classNames(
				iconColorMaping[color as keyof typeof iconColorMaping],
			)}
			{...rest}>
			{children}
		</button>
	);
});

export default IconButton;
