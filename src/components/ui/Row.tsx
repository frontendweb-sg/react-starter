import {memo, forwardRef} from "react";
import type {PropsWithRef, PropsWithChildren, ForwardedRef} from "react";

import type {Row} from "../../types";
import {tailwindClassesMapping} from "../../utils/tailwind-css-utils";

import classNames from "classnames";

type RowProps = {className?: string; row?: Row};
type Props = PropsWithRef<PropsWithChildren<RowProps>>;

const Row = memo(
	forwardRef(function ColComponent(
		{children, row, className, ...rest}: Props,
		ref: ForwardedRef<HTMLDivElement>,
	) {
		const css = classNames(
			tailwindClassesMapping.rows[
				row as keyof typeof tailwindClassesMapping.rows
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

export default Row;
