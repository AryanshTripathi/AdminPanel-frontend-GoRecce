import React, { useState } from "react";
import avatar from "../avatar.jpg";
import avatar2 from "../avatar2.jpg";
import avatar3 from "../avatar3.png";
import avatar4 from "../avatar4.jpg";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const customerGridImage = (props) => (
	<div className="image flex gap-4 items-center">
		<img
			className="rounded-full w-10 h-10"
			src={props.CustomerImage}
			alt="employee"
		/>
		<Link to="/deactivation">
			<div>{props.CustomerName}</div>
		</Link>
	</div>
);

const customerGridStatus = (props) => (
	<div className="flex gap-2 justify-start items-center text-gray-700 capitalize">
		<p
			style={{ background: props.StatusBg }}
			className="rounded-full h-3 w-3"
		/>
		<p>{props.Status}</p>
	</div>
);

const customerGridAction = () => (
	<div className="flex gap-4 justify-center items-center">
		<ButtonComponent
			cssClass="e-success"
			className="rounded-lg"
			onClick={() => {
				console.log("clicked");
				toast.success("Deactivation successful");
			}}>
			Accept
		</ButtonComponent>
		<ButtonComponent
			cssClass="e-danger"
			className="rounded-lg"
			onClick={() => {
				console.log("clicked");
				toast.error("Request rejected successfully");
			}}>
			Decline
		</ButtonComponent>
	</div>
);

export const deactivationData = [
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Nirav Joshi",
		CustomerEmail: "nirav@gmail.com",
		CustomerImage: avatar2,
		Status: "Active",
		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Sunil Joshi",
		CustomerEmail: "sunil@gmail.com",
		Status: "Active",
		CustomerImage: avatar3,

		StatusBg: "#8BE78B",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Andrew McDownland",
		CustomerEmail: "andrew@gmail.com",
		Status: "Pending",
		CustomerImage: avatar4,
		StatusBg: "#FEC90F",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Christopher Jamil",
		CustomerEmail: "jamil@gmail.com",
		Status: "Deactivated",
		CustomerImage: avatar,
		StatusBg: "red",
	},
	{
		Mobile: "1234567890",
		CustomerName: "Michael",
		CustomerEmail: "michael@gmail.com",
		Status: "Deact",
		CustomerImage: avatar2,
		StatusBg: "red",
	},
];

export const deactivationGrid = [
	{
		headerText: "Name",
		width: "120",
		template: customerGridImage,
		textAlign: "Center",
	},
	{
		field: "CustomerEmail",
		headerText: "Email",
		width: "90",
		textAlign: "Center",
	},
	// {
	// 	field: "Status",
	// 	headerText: "Status",
	// 	width: "90",
	// 	format: "yMd",
	// 	textAlign: "Left",
	// 	template: customerGridStatus,
	// },
	{
		field: "Mobile",
		headerText: "Mobile No.",
		width: "90",
		textAlign: "Center",
	},

	{
		headerText: "Actions",
		width: "120",
		textAlign: "Center",
		template: customerGridAction,
	},
];

// { type: "checkbox", width: "50" },
//  {
// 		field: "ProjectName",
// 		headerText: "Project Name",
// 		width: "150",
// 		textAlign: "Center",
// 	},
// {
// 	field: "Status",
// 	headerText: "Status",
// 	width: "130",
// 	format: "yMd",
// 	textAlign: "Center",
// 	template: customerGridStatus,
// },
// 	{
// 		field: "Weeks",
// 		headerText: "Weeks",
// 		width: "100",
// 		format: "C2",
// 		textAlign: "Center",
// 	},
// 	{
// 		field: "Budget",
// 		headerText: "Budget",
// 		width: "100",
// 		format: "yMd",
// 		textAlign: "Center",
// 	},

// 	{
// 		field: "Location",
// 		headerText: "Location",
// 		width: "150",
// 		textAlign: "Center",
// 	},

// 	{
// 		field: "CustomerID",
// 		headerText: "Customer ID",
// 		width: "120",
// 		textAlign: "Center",
// 		isPrimaryKey: true,
// 	},
