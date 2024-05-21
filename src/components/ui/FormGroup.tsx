import {forwardRef, memo} from "react";
import type {ForwardedRef, PropsWithRef} from "react";

import classNames from "classnames";

export type FormGroupProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	label?: string;
	error?: string;
	labelFor?: string;
};
type Props = PropsWithRef<FormGroupProps>;

/**
 * Form group component
 */
const FormGroup = memo(
	forwardRef(function FormGroup(
		{children, label, className, labelFor, ...rest}: Props,
		ref: ForwardedRef<HTMLDivElement>,
	) {
		return (
			<div
				ref={ref}
				className={classNames("mb-3 relative", className)}
				{...rest}>
				{label && (
					<label
						htmlFor={labelFor}
						className="block text-slate-500 text-xs font-medium mb-2">
						{label}
					</label>
				)}
				{children}
			</div>
		);
	}),
);

export default FormGroup;
