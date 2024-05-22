import {createContext, useContext} from "react";
import {FaCaretUp} from "react-icons/fa";
import {FaCaretDown} from "react-icons/fa6";

import useToggle from "../../hooks/useToggle";

import classNames from "classnames";

type AccordionProps = React.HtmlHTMLAttributes<HTMLDivElement>;
type AccordionState = {open: boolean; handleToggle: () => void};

const AccordionContext = createContext<null | AccordionState>(null);
function Accordion({children, className, ...rest}: AccordionProps) {
	return (
		<div className={classNames("accordion", className)} {...rest}>
			{children}
		</div>
	);
}

function useAccordion() {
	const context = useContext<AccordionState | null>(AccordionContext);
	if (!context) {
		throw new Error("Context can not be empty");
	}
	return context;
}

type AccordionItemProps = AccordionProps;
function AccordionItem({children, ...rest}: AccordionItemProps) {
	const {open, handleToggle} = useToggle();
	return (
		<AccordionContext.Provider value={{open, handleToggle}}>
			<div className="w-full border border-gray-50" {...rest}>
				{children}
			</div>
		</AccordionContext.Provider>
	);
}

type AccordionHeaderProps = AccordionProps;
function AccordionHeader({children}: AccordionHeaderProps) {
	const {handleToggle, open} = useAccordion();
	return (
		<div
			className="flex justify-between items-center p-2"
			onClick={handleToggle}>
			{children}
			<button>{open ? <FaCaretUp /> : <FaCaretDown />}</button>
		</div>
	);
}

type AccordionContentProps = AccordionProps;
function AccordionContent({children}: AccordionContentProps) {
	const {open} = useAccordion();
	return (
		<div className={classNames("bg-gray-100 p-2", open ? "visible" : "hidden")}>
			{children}
		</div>
	);
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
export default Accordion;
