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

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../Components";

const Customers = () => {
	return (
		<div className="m-2 mt-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Customers" category="Page" />
			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				toolbar={["Delete"]}
				editSettings={{ allowEditing: true, allowDeleting: true }}
				width="auto">
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Edit, Sort, Toolbar, Selection, Filter]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
