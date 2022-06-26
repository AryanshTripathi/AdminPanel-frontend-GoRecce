import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	Tooltip,
	DataLabel,
	BarSeries,
} from "@syncfusion/ej2-react-charts";
import {
	barPrimaryXAxis,
	barPrimaryYAxis,
	barCustomSeries,
} from "../../data/dummy";
import { Header } from "../../Components";
import { useStateContext } from "../../Context/ContextProvider";

const Bar = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col">
			<Header category="Chart" title="Inflation Rate" change={true} />
			<ChartComponent
				id="charts"
				primaryXAxis={barPrimaryXAxis}
				primaryYAxis={barPrimaryYAxis}
				title="Medals"
				type="Bar"
				width="700px"
				tooltip={{ enable: true }}
				background={currentMode == "Dark" ? "#33373D" : "#fff"}
				legendSettings={{ enable: true, background: "#fff" }}>
				<Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
				<SeriesCollectionDirective>
					{barCustomSeries.map((item, index) => (
						<SeriesDirective key={index} {...item} />
					))}
				</SeriesCollectionDirective>
			</ChartComponent>
			;
		</div>
	);
};

export default Bar;
