import {Children, useState} from "react";

import classNames from "classnames";

type TabsProps = React.HtmlHTMLAttributes<HTMLDivElement> & {tabs?: string[]};
type TabProps = TabsProps;
type TabContentProps = TabsProps & {
	value: number;
};

function a11yProps(index: number) {
	return {
		id: `tab-${index}`,
		"aria-controls": `tabpanel-${index}`,
	};
}
function Tabs({children, tabs}: TabsProps) {
	const [selectedTab, setSelectedTab] = useState(0);

	const renderTabs = tabs?.map((tab, index) => (
		<Tab
			className={index === selectedTab ? "bg-gray-700" : "bg-gray-100"}
			onClick={() => setSelectedTab(index)}
			key={index}
			{...a11yProps(index)}>
			{tab}
		</Tab>
	));

	return (
		<div className="px-3 py-1 bg-gray-100">
			{tabs && (
				<div className="flex items-center justify-stretch">{renderTabs}</div>
			)}
			{Children.map(children, (child, index) => {
				if (index === selectedTab) {
					return child;
				}
				return null;
			})}
		</div>
	);
}

function Tab({children, className, ...rest}: TabProps) {
	return (
		<div
			className={classNames("w-full text-center", className)}
			{...a11yProps}
			{...rest}>
			{children}
		</div>
	);
}

function TabContent({children}: TabContentProps) {
	return <div>{children}</div>;
}

export {TabContent};
export default Tabs;
