import {memo, forwardRef} from "react";
import type {PropsWithRef, PropsWithChildren, ForwardedRef} from "react";

import type {Col} from "../../types";
import {tailwindClassesMapping} from "../../utils/tailwind-css-utils";

import classNames from "classnames";

type ColProps = {className?: string; col?: Col};
type Props = PropsWithRef<PropsWithChildren<ColProps>>;

const Col = memo(
	forwardRef(function ColComponent(
		{children, col, className, ...rest}: Props,
		ref: ForwardedRef<HTMLDivElement>,
	) {
		const css = classNames(
			tailwindClassesMapping.cols[
				col as keyof typeof tailwindClassesMapping.cols
			],
			className,
		);

		return (
			<div className={css ? css : undefined} ref={ref} {...rest}>
				{children}
			</div>
		);
	}),
);

export default Col;
