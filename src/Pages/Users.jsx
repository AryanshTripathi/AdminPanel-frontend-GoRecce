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

import { UsersData, UsersGrid } from "../data/Users/userData";

import { Header } from "../Components";

const Users = () => {
	return (
		<div className="m-2 mt-12 md:m-10 md:mt-4 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Users" category="Page" />
			<GridComponent
				dataSource={UsersData}
				allowPaging
				allowSorting
				toolbar={["Search"]}
				width="auto">
				<ColumnsDirective>
					{UsersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Edit, Search, Sort, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Users;
