import {SxProps} from "../../types";
import {extractTailwindClasses} from "../../utils/tailwind-css-utils";

import classNames from "classnames";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

/**
 * Form component
 * @param param {children}
 * @returns
 */
function Form({children, ...rest}: FormProps) {
	return (
		<form {...rest} noValidate>
			{children}
		</form>
	);
}

type FormButtonsProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	box?: SxProps;
};

function FormButtons({children, className, box, ...rest}: FormButtonsProps) {
	const combinedClassName = classNames(
		"flex",
		className,
		extractTailwindClasses(box!),
	);

	return (
		<div className={combinedClassName} {...rest}>
			{children}
		</div>
	);
}

export {FormButtons};
export default Form;
