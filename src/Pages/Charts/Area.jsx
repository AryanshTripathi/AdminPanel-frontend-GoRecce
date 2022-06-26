import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../Components";
import {
	areaCustomSeries,
	areaPrimaryXAxis,
	areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Context/ContextProvider";

const AreaChart = () => {
	const { currentMode } = useStateContext();

	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header category="Chart" title="Area Chart" change={true} />
			<ChartComponent
				id="area-chart"
				height="420px"
				primaryXAxis={areaPrimaryXAxis}
				primaryYAxis={areaPrimaryYAxis}
				background={currentMode == "Dark" ? "#33373E" : "#fff"}
				legendSettings={{ enable: true, background: "#fff" }}>
				<SeriesCollectionDirective>
					{areaCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
				<Inject services={[DateTime, SplineAreaSeries, Legend]} />
			</ChartComponent>
		</div>
	);
};

export default AreaChart;
