import React from "react";

import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Filter,
	Sort,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
} from "@syncfusion/ej2-react-grids";

import {
	deactivationData,
	deactivationGrid,
} from "../data/Requests/deactivationData";
import { Header } from "../Components";

const DeactivationRequest = () => {
	return (
		<div className="m-2 mt-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Deactivation" category="Page" />
			<GridComponent
				dataSource={deactivationData}
				allowPaging
				allowSorting
				editSettings={{ allowEditing: true, allowDeleting: true }}
				width="auto">
				<ColumnsDirective>
					{deactivationGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Edit, Sort, Toolbar, Selection, Filter]} />
			</GridComponent>
		</div>
	);
};

export default DeactivationRequest;
