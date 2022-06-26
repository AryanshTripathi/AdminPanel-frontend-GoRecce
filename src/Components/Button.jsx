import React from "react";

const Button = ({
	bgColor,
	bgHoverColor,
	color,
	text,
	borderRadius,
	size,
	handleClick,
}) => {
	return (
		<button
			type="button"
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
