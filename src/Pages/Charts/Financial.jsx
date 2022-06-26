import React from "react";
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	CandleSeries,
	Category,
	Tooltip,
	Zoom,
	Crosshair,
	DateTime,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../Components";
import { useStateContext } from "../../Context/ContextProvider";

import {
	FinancialPrimaryXAxis,
	FinancialPrimaryYAxis,
	financialChartData,
} from "../../data/dummy";

const Financial = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col">
			<Header category="Chart" title="Financial Chart" change={true} />
			<ChartComponent
				id="charts"
				primaryXAxis={FinancialPrimaryXAxis}
				primaryYAxis={FinancialPrimaryYAxis}
				tooltip={{ enable: true }}
				width="700px"
				background={currentMode == "Dark" ? "#33373D" : "#fff"}
				legendSettings={{ enable: true, background: "#fff" }}>
				<Inject
					services={[
						CandleSeries,
						Tooltip,
						Category,
						Crosshair,
						Zoom,
						DateTime,
					]}
				/>
				<SeriesCollectionDirective>
					<SeriesDirective
						dataSource={financialChartData}
						xName="x"
						yName="low"
						name="SHIRPUR-G"
						type="Candle"
						low="low"
						high="high"
						open="open"
						close="close"
						bearFillColor="#0f0"
						bullFillColor="#f00"></SeriesDirective>
				</SeriesCollectionDirective>
			</ChartComponent>
		</div>
	);
};

export default Financial;
