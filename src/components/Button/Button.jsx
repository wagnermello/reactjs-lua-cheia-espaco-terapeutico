import React from "react";
import "./Button.scss";

const STYLES = ["button-purple", "button-white"];

export const Button = ({ children, type, onClick, buttonStyle }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	return (
		<button className={`${checkButtonStyle}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};
