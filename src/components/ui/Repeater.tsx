type RepeaterProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export default function Repeater({children, ...rest}: RepeaterProps) {
	return <div {...rest}>{children}</div>;
}
