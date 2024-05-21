import {memo, ReactElement} from "react";

import classNames from "classnames";

const variantMaping = {
	filled: {
		primary: "bg-slate-700 text-white",
		secondary: "bg-gray-500 text-white",
		info: "bg-indigo-700 text-white",
		warning: "bg-yellow-700 text-white",
		danger: "bg-red-700 text-white",
		default: "bg-gray-700 text-white",
		success: "bg-green-700 text-white",
	},
	text: {
		primary: "text-slate-700 text-white",
		secondary: "text-gray-500 text-white",
		info: "text-indigo-700 text-white",
		warning: "text-yellow-700 text-white",
		danger: "text-red-700 text-white",
		default: "text-gray-700 text-white",
		success: "text-green-700 text-white",
	},
	outlined: {
		primary:
			"border border-slate-700 text-slate-700 hover:text-white hover:bg-slate-700",
		secondary:
			"border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-700",
		info: "border border-indigo-700 text-indigo-700 hover:text-white hover:bg-indigo-700",
		warning:
			"border border-yellow-700 text-yellow-700 hover:text-white hover:bg-yellow-700",
		danger:
			"border border-red-700 text-red-700 hover:text-white hover:bg-red-700",
		default:
			"border border-gray-700 text-gray-700 hover:text-info-700 hover:bg-info-700",
		success:
			"border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
	},
};

const sizeMapping = {
	xs: "py-1 px-2",
	sm: "py-1 px-2",
	md: "py-1 px-3",
	lg: "py-2 px-4",
	xl: "py-3 px-6",
	"2xl": "py-3 px-7",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof variantMaping;
	color?: keyof typeof variantMaping.filled;
	size?: keyof typeof sizeMapping;
	pills?: boolean;
	icon?: ReactElement;
	block?: boolean;
};

const Button = memo(function Button({
	children,
	size = "sm",
	color = "primary",
	variant = "filled",
	pills = false,
	icon,
	block = false,
	className,
	...rest
}: ButtonProps) {
	const colors = variantMaping[variant];
	const css = classNames(
		"inline-flex gap-2 items-center justify-center relative",
		pills ? "rounded-full" : "rounded-md",
		block && "w-full",
		colors[color as keyof typeof colors],
		sizeMapping[size],
		className,
	);
	return (
		<button className={css} {...rest}>
			{icon} {children}
		</button>
	);
});
export default Button;
