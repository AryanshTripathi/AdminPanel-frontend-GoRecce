import React from "react";
import { Header } from "../../Components";
import { StackedChart } from "../../Components";

const Stacked = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Inflation Rate" change={true} />
			<div className="w-full">
				<StackedChart />
			</div>
		</div>
	);
};

export default Stacked;
