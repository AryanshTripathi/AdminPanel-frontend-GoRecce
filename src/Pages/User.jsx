import React, { useReducer } from "react";
import { Header } from "../Components";
import {
	UsersData,
	UserBookingGrid,
	UserListingGrid,
} from "../data/Users/userData";
import { useParams } from "react-router-dom";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Sort,
	Inject,
} from "@syncfusion/ej2-react-grids";

const findUser = (id) => UsersData.find((user) => user.UserID == id);

const User = () => {
	let params = useParams();
	const user = findUser(params.id);

	return (
		<div className="m-2 mt-6 md:m-10 md:mt-4 p-2 md:p-10 bg-white rounded-3xl min-h-full">
			<Header title={`User`} category="Page" />

			<div className="w-full rounded-lg p-4 pb-2 bg-red-100">
				<div className="flex justify-between items-center p-4 pl-8">
					<div className="font-medium text-5xl italic">{user.Name}</div>
					<span className="e-avatar e-avatar-xlarge e-avatar-circle">
						<img
							src={user.UserImage}
							alt="avatar"
							className="w-full h-full rounded-full"
						/>
					</span>
				</div>

				<div className="text-2xl font-medium mb-1">Personal Info</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						Contact:
					</div>
					<div className="text-lg italic text-gray-700">{user.Mobile}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">Email:</div>
					<div className="text-lg italic text-gray-700">{user.Email}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						Joined As:
					</div>
					<div className="text-lg italic text-gray-700">{user.JoinedAs}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						Address:
					</div>
					<div className="text-lg italic text-gray-700">{user.Address}</div>
				</div>

				<div className="text-2xl font-medium mb-1 mt-2">Saved Payment Info</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						Bank Name:
					</div>
					<div className="text-lg italic text-gray-700">{user.BankName}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						IFSC Code:
					</div>
					<div className="text-lg italic text-gray-700">{user.IFSC_Code}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">
						Account Number:
					</div>
					<div className="text-lg italic text-gray-700">{user.AcNo}</div>
				</div>
				<div className="flex gap-2 justify-start items-center p-2 ml-8">
					<div className="italic font-medium text-lg text-gray-800">UPI:</div>
					<div className="text-lg italic text-gray-700">{user.UPI}</div>
				</div>
			</div>

			<div className="w-full rounded-lg p-4 mt-20 bg-red-300">
				<div className="text-2xl font-medium mb-6 text-center">Bookings</div>
				<GridComponent
					dataSource={user.bookingInfo}
					allowPaging
					allowSorting
					width="auto">
					<ColumnsDirective>
						{UserBookingGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject services={[Page, Sort]} />
				</GridComponent>
			</div>

			<div className="w-full rounded-lg p-4 mt-20 bg-red-300">
				<div className="text-2xl font-medium mb-6 text-center">Listings</div>
				<GridComponent
					dataSource={user.listingInfo}
					allowPaging
					allowSorting
					width="auto">
					<ColumnsDirective>
						{UserListingGrid.map((item, index) => (
							<ColumnDirective key={index} {...item} />
						))}
					</ColumnsDirective>
					<Inject services={[Page, Sort]} />
				</GridComponent>
			</div>
		</div>
	);
};

export default User;
