import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PyramidSeries,
	AccumulationDataLabel,
	AccumulationTooltip,
	Inject,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { Header } from "../../Components";
import { useStateContext } from "../../Context/ContextProvider";
const Pyramid = () => {
	const { currentMode } = useStateContext();
	return (
		<div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl flex flex-col">
			<Header category="Chart" title="Inflation Rate" change={true} />
			<AccumulationChartComponent
				id="charts"
				className="hover:cursor-pointer self-center"
				tooltip={{ enable: true }}
				background={currentMode == "Dark" ? "#33373E" : "#fff"}
				legendSettings={{
					visible: true,
					position: "Bottom",
					background: "White",
					textStyle: {
						textAlignment: "Center",
						textOverflow: "Wrap",
					},
				}}>
				<Inject
					services={[
						AccumulationLegend,
						PyramidSeries,
						AccumulationDataLabel,
						AccumulationTooltip,
					]}
				/>
				<AccumulationSeriesCollectionDirective>
					<AccumulationSeriesDirective
						dataSource={PyramidData}
						xName="x"
						yName="y"
						type="Pyramid"
						explode="true"
						explodeOffset="10"
						dataLabel={{
							visible: true,
							position: "Outside",
							font: {
								fontWeight: 600,
							},
						}}></AccumulationSeriesDirective>
				</AccumulationSeriesCollectionDirective>
			</AccumulationChartComponent>
		</div>
	);
};

export default Pyramid;
