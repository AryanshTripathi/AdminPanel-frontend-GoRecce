import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Components";
import {
	ECommerce,
	Users,
	Customers,
	DeactivationRequest,
	User,
} from "./Pages";
import { ToastContainer } from "react-toastify";

import { useStateContext } from "./Context/ContextProvider";

import "./App.css";

function App() {
	const {
		activeMenu,
		themeSettings,
		setThemeSettings,
		currentColor,
		currentMode,
	} = useStateContext();

	return (
		<div className={currentMode == "Dark" ? "dark" : ""}>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg xl:overflow-x-hidden">
					{/* Theme Settings Icon */}
					<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
						<TooltipComponent content="Settings" position="Top">
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								style={{ background: currentColor, borderRadius: "50%" }}
								onClick={() => {
									setThemeSettings(true);
								}}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>

					{/* Setting up the sidebar */}
					{activeMenu ? (
						<div
							id="sidebar"
							className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					) : (
						<div id="sidebar" className="w-0 dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}
					<div
						className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? "md:ml-72" : "flex-2"
						}`}>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>

						<div>
							{themeSettings && <ThemeSettings />}
							<Routes>
								{/* Dashboard */}
								<Route path="/" element={<ECommerce />} />
								<Route path="/ecommerce" element={<ECommerce />} />

								{/* Pages */}
								<Route path="/users" element={<Users />} />
								<Route path="/customers" element={<Customers />} />
								<Route path="/deactivation" element={<DeactivationRequest />} />
								<Route path="/user/:id" element={<User />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
