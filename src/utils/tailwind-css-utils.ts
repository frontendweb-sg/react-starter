import type {SxProps} from "../types";

export const tailwindClassesMapping = {
	flex: {
		"1": "flex-1",
		auto: "flex-auto",
		internal: "flex-internal",
		none: "flex-none",
	},
	flexWrap: {
		wrap: "flex-wrap",
		reverse: "flex-wrap-reverse",
		nowrap: "flex-nowrap",
	},
	flexDirection: {
		row: "flex-row",
		rowReverse: "flex-row-reverse",
		col: "flex-col",
		colReverse: "flex-col-reverse",
	},
	flexShrink: {
		"1": "shrink",
		"0": "shrink-0",
	},
	flexGrow: {
		"1": "grow",
		"0": "grow-0",
	},
	order: {
		"1": "order-1",
		"2": "order-2",
		"3": "order-3",
		"4": "order-4",
		"5": "order-5",
		"6": "order-6",
		"7": "order-7",
		"8": "order-8",
		"9": "order-9",
		"10": "order-10",
		"11": "order-11",
		"12": "order-12",
		first: "order-first",
		last: "order-last",
		none: "order-none",
	},
	align: {
		left: "text-left",
		right: "text-right",
		center: "text-center",
		justify: "text-justify",
		start: "text-start",
		end: "text-end",
	},
	alignItems: {
		start: "items-start",
		end: "items-end",
		center: "items-center",
		baseline: "items-baseline",
		stretch: "items-stretch",
	},
	alignSelf: {
		auto: "self-auto",
		start: "self-start",
		end: "self-end",
		center: "self-center",
		stretch: "self-stretch",
		baseline: "self-baseline",
	},
	justifySelf: {
		auto: "justify-self-auto",
		start: "justify-self-start",
		end: "justify-self-end",
		center: "justify-self-center",
		stretch: "justify-self-stretch",
	},
	alignContent: {
		normal: "content-normal",
		start: "content-start",
		end: "content-end",
		center: "content-center",
		between: "content-between",
		around: "content-around",
		evenly: "content-evenly",
		baseline: "content-baseline",
		stretch: "content-stretch",
	},
	justifyItems: {
		start: "justify-items-start",
		end: "justify-items-end",
		center: "justify-items-center",
		stretch: "justify-items-stretch",
	},
	justifyContent: {
		normal: "justify-normal",
		start: "justify-start",
		end: "justify-end",
		center: "justify-center",
		between: "justify-between",
		evenly: "justify-evenly",
		stretch: "justify-stretch",
	},
	gridCols: {
		"1": "grid-cols-1",
		"2": "grid-cols-2",
		"3": "grid-cols-3",
		"4": "grid-cols-4",
		"5": "grid-cols-5",
		"6": "grid-cols-6",
		"7": "grid-cols-7",
		"8": "grid-cols-8",
		"9": "grid-cols-9",
		"10": "grid-cols-10",
		"11": "grid-cols-11",
		"12": "grid-cols-12",
		none: "grid-cols-none",
		subgrid: "grid-cols-subgrid",
	},
	gridRows: {
		"1": "grid-rows-1",
		"2": "grid-rows-2",
		"3": "grid-rows-3",
		"4": "grid-rows-4",
		"5": "grid-rows-5",
		"6": "grid-rows-6",
		"7": "grid-rows-7",
		"8": "grid-rows-8",
		"9": "grid-rows-9",
		"10": "grid-rows-10",
		"11": "grid-rows-11",
		"12": "grid-rows-12",
		none: "grid-rows-none",
		subgrid: "grid-rows-subgrid",
	},
	cols: {
		auto: "col-auto",
		"1": "col-span-1",
		"2": "col-span-2",
		"3": "col-span-3",
		"4": "col-span-4",
		"5": "col-span-5",
		"6": "col-span-6",
		"7": "col-span-7",
		"8": "col-span-8",
		"9": "col-span-9",
		"10": "col-span-10",
		"11": "col-span-11",
		"12": "col-span-12",
		full: "col-span-full",
		// start
		"start-1": "col-start-1",
		"start-2": "col-start-2",
		"start-3": "col-start-3",
		"start-4": "col-start-4",
		"start-5": "col-start-5",
		"start-6": "col-start-6",
		"start-7": "col-start-7",
		"start-8": "col-start-8",
		"start-9": "col-start-9",
		"start-10": "col-start-10",
		"start-11": "col-start-11",
		"start-12": "col-start-12",
		"start-13": "col-start-13",
		"start-auto": "col-start-auto",
		// end
		"end-1": "col-end-1",
		"end-2": "col-end-2",
		"end-3": "col-end-3",
		"end-4": "col-end-4",
		"end-5": "col-end-5",
		"end-6": "col-end-6",
		"end-7": "col-end-7",
		"end-8": "col-end-8",
		"end-9": "col-end-9",
		"end-10": "col-end-10",
		"end-11": "col-end-11",
		"end-12": "col-end-12",
		"end-13": "col-end-13",
		"end-auto": "col-end-auto",
	},
	rows: {
		auto: "row-auto",
		"1": "row-span-1",
		"2": "row-span-2",
		"3": "row-span-3",
		"4": "row-span-4",
		"5": "row-span-5",
		"6": "row-span-6",
		"7": "row-span-7",
		"8": "row-span-8",
		"9": "row-span-9",
		"10": "row-span-10",
		"11": "row-span-11",
		"12": "row-span-12",
		full: "row-span-full",
		// start
		"start-1": "row-start-1",
		"start-2": "row-start-2",
		"start-3": "row-start-3",
		"start-4": "row-start-4",
		"start-5": "row-start-5",
		"start-6": "row-start-6",
		"start-7": "row-start-7",
		"start-8": "row-start-8",
		"start-9": "row-start-9",
		"start-10": "row-start-10",
		"start-11": "row-start-11",
		"start-12": "row-start-12",
		"start-13": "row-start-13",
		"start-auto": "row-start-auto",
		// end
		"end-1": "row-end-1",
		"end-2": "row-end-2",
		"end-3": "row-end-3",
		"end-4": "row-end-4",
		"end-5": "row-end-5",
		"end-6": "row-end-6",
		"end-7": "row-end-7",
		"end-8": "row-end-8",
		"end-9": "row-end-9",
		"end-10": "row-end-10",
		"end-11": "row-end-11",
		"end-12": "row-end-12",
		"end-13": "row-end-13",
		"end-auto": "row-end-auto",
	},
};
export const extractTailwindClasses = (box: SxProps) => {
	if (!box) return "";

	return Object.entries(box)
		.map(([key, value]) => {
			if (!value) return ""; // Ignore if value is falsy
			const mapping =
				tailwindClassesMapping[key as keyof typeof tailwindClassesMapping];
			return mapping ? mapping[value as keyof typeof mapping] : "";
		})
		.filter((className) => className !== "") // Filter out empty class names
		.join(" ");
};
