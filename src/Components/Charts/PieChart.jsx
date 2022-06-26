import React from "react";
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	AccumulationLegend,
	PieSeries,
	AccumulationDataLabel,
	AccumulationTooltip,
	Inject,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../Context/ContextProvider";

const Pie = ({ id, data, legendVisibility, width, height }) => {
	const { currentMode } = useStateContext();
	return (
		<AccumulationChartComponent
			id={id}
			className="hover:cursor-pointer self-center"
			legendSettings={{ visible: legendVisibility, background: "#fff" }}
			tooltip={{ enable: true }}
			background={currentMode == "Dark" ? "#33373D" : "#fff"}
			width={width}
			height={height}>
			<Inject
				services={[
					AccumulationLegend,
					PieSeries,
					AccumulationDataLabel,
					AccumulationTooltip,
				]}
			/>
			<AccumulationSeriesCollectionDirective>
				<AccumulationSeriesDirective
					dataSource={data}
					xName="x"
					yName="y"
					type="Pie"
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
	);
};

export default Pie;
