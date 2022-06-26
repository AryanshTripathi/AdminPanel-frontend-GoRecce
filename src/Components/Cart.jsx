import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import { useStateContext } from "../Context/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";
import {
	createSpinner,
	showSpinner,
	hideSpinner,
} from "@syncfusion/ej2-popups";

const changeValue = (val, index) => {
	let qty = document.getElementById(`qty-${index}`).innerText;
	if (qty == "0" && val == -1) {
		alert("Number of items are already zero");
	} else {
		document.getElementById(`qty-${index}`).innerText = parseInt(qty) + val;

		let operand = val * parseInt(cartData[index].price.slice(1));

		document.getElementById(`price-${index}`).innerText = `$${
			parseInt(document.getElementById(`price-${index}`).innerText.slice(1)) +
			operand
		}`;

		document.getElementById("sub-tot").innerText = `$${
			parseInt(document.getElementById("sub-tot").innerText.slice(1)) + operand
		}`;

		document.getElementById("tot").innerText = `$${
			parseInt(document.getElementById("tot").innerText.slice(1)) + operand
		}`;
	}
};

const handleClick = () => {
	document.getElementById("root").classList.add("fade");
	createSpinner({
		target: document.getElementById("place-order"),
	});
	showSpinner(document.getElementById("place-order"));

	setTimeout(() => {
		hideSpinner(document.getElementById("place-order"));
		console.log("Done");
		alert("Order Placed");
		document.getElementById("root").classList.remove("fade");
	}, 5000);
};

const Cart = () => {
	const { currentColor, closeApplication } = useStateContext();

	return (
		<div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
			<div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
				<p className="font-semibold text-lg mb-3">Shopping Cart</p>
				<button
					className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block absolute top-0 right-2"
					onClick={closeApplication}>
					<MdOutlineCancel />
				</button>
				{cartData?.map((item, index) => (
					<div key={index}>
						<div>
							<div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
								<img className="rounded-lg h-80 w-24" src={item.image} alt="" />
								<div>
									<p className="font-semibold ">{item.name}</p>
									<p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
										{item.category}
									</p>
									<div className="flex gap-8 mt-2 items-center">
										<p className="font-semibold text-lg" id={`price-${index}`}>
											{item.price}
										</p>
										<div className="flex items-center gap-1 rounded">
											<ButtonComponent cssClass="e-round e-danger">
												<div
													className="text-3xl w-full h-full flex justify-center items-center"
													onClick={() => {
														changeValue(-1, index);
													}}>
													<AiOutlineMinus />
												</div>
											</ButtonComponent>
											<p
												className="p-2 border text-center dark:bg-slate-700 border-gray-700  dark:border-gray-200 text-slate-700 dark:text-slate-100 rounded-xl w-12"
												id={`qty-${index}`}>
												1
											</p>

											<ButtonComponent cssClass="e-round e-success">
												<div
													className="text-3xl w-full h-full flex justify-center items-center"
													onClick={() => {
														changeValue(1, index);
													}}>
													<AiOutlinePlus />
												</div>
											</ButtonComponent>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="mt-3 mb-3">
					<div className="flex justify-between items-center">
						<p className="text-gray-500 dark:text-gray-200">Sub Total</p>
						<p className="font-semibold" id="sub-tot">
							$89
						</p>
					</div>
					<div className="flex justify-between items-center mt-3">
						<p className="text-gray-500 dark:text-gray-200">Total</p>
						<p className="font-semibold" id="tot">
							$89
						</p>
					</div>
				</div>
				<div className="mt-2 flex justify-center" id="place-order">
					<Button
						color="white"
						bgColor={currentColor}
						text="Place Order"
						borderRadius="15px"
						width="full"
						handleClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Cart;
