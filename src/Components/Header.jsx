import React from "react";

const Header = ({ category, title, change }) => {
	return (
		<div className="mb-5">
			<p className="text-gray-400">{category}</p>
			<p
				className={`text-3xl font-extrabold tracking-tight text-slate-900 ${
					change ? "dark:text-gray-200" : ""
				}`}>
				{title}
			</p>
		</div>
	);
};

export default Header;
