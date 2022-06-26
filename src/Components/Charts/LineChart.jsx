import React from "react";

import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	DateTime,
	Legend,
	Tooltip,
	LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
	lineCustomSeries,
	LinePrimaryXAxis,
	LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Context/ContextProvider";

const LineChart = () => {
	const { currentMode } = useStateContext();

	return (
		<ChartComponent
			id="line-chart"
			height="420px"
			primaryXAxis={LinePrimaryXAxis}
			primaryYAxis={LinePrimaryYAxis}
			tooltip={{ enable: true }}
			background={currentMode == "Dark" ? "#33373D" : "#fff"}
			legendSettings={{ enable: true, background: "#fff" }}>
			<SeriesCollectionDirective>
				{lineCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
			<Inject services={[DateTime, LineSeries, Legend, Tooltip]} />
		</ChartComponent>
	);
};

export default LineChart;
