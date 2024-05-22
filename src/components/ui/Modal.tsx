import {memo} from "react";
import {createPortal} from "react-dom";
import {FaTimes} from "react-icons/fa";

import classNames from "classnames";

const defaultModalSizes = {
	xs: "max-w-xs",
	sm: "max-w-sm",
	md: "max-w-md",
	lg: "max-w-lg",
	xl: "max-w-xl",
	"2xl": "max-w-2xl",
	"3xl": "max-w-3xl",
	"4xl": "max-w-4xl",
	"5xl": "max-w-5xl",
};
type ModalProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	label?: string;
	onClose?: () => void;
	open: boolean;
	size?: keyof typeof defaultModalSizes;
};

const ModalComponent = memo(function ({
	children,
	label,
	open,
	onClose,
	size,
	className,
	...rest
}: ModalProps) {
	if (!open) return null;

	const closeButtonElement = (
		<button
			type="button"
			className="text-gray-400 absolute top-4 right-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
			data-modal-hide="static-modal"
			onClick={onClose}>
			<FaTimes />
			<span className="sr-only">Close modal</span>
		</button>
	);

	return (
		<>
			<div
				id="static-modal"
				data-modal-backdrop="static"
				tabIndex={-1}
				aria-hidden={!open}
				aria-modal={open}
				className={classNames(
					"overflow-y-auto shadow-md overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full flex",
					className,
				)}
				role="dialog"
				{...rest}>
				<div
					className={classNames(
						"relative p-4 w-full max-h-full",
						defaultModalSizes[size as keyof typeof defaultModalSizes],
					)}>
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						{label ? (
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									{label}
								</h3>
								{closeButtonElement}
							</div>
						) : (
							closeButtonElement
						)}

						<div className="p-4 md:p-5 space-y-4">{children}</div>
					</div>
				</div>
			</div>
			<div
				onClick={onClose}
				className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
		</>
	);
});

function Modal(props: ModalProps) {
	return createPortal(<ModalComponent {...props} />, document.body);
}

export default Modal;
