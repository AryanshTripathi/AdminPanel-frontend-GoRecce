import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Sort,
	Search,
	Edit,
	Inject,
	Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";

import { Header } from "../Components";

const Employee = () => {
	return (
		<div className="m-2 mt-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Employees" category="Page" />
			<GridComponent
				dataSource={employeesData}
				allowPaging
				allowSorting
				toolbar={["Search"]}
				width="auto">
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Edit, Search, Sort, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Employee;
