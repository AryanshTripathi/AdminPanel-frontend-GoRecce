import React from "react";
import { Header, PieChart } from "../../Components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col">
			<Header category="Chart" title="Pie Chart" change={true} />
			<div className="w-full">
				<PieChart
					id="pie-chart"
					data={pieChartData}
					legendVisibility={true}
					height="300px"
					width="500px"
				/>
			</div>
		</div>
	);
};

export default Pie;
