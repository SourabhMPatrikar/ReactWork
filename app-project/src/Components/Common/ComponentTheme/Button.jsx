import React from "react";
import "../../../css/Theme/button.css";
const Button = ({ variant, btnText, handleClick }) => {
	//let classVariantName = variant === "default" ? "btn-default" : "btn";
	switch (variant) {
		case "default":
			variant = "btn-default";
			break;
		case "primary":
			variant = "btn-primary";
			break;
		case "info":
			variant = "btn-info";
			break;
		case "secondary":
			variant = "btn-secondary";
			break;
		case "dark":
			variant = "btn-dark";
			break;
		case "light":
			variant = "btn-light";
			break;
		case "success":
			variant = "btn-success";
			break;
		case "danger":
			variant = "btn-danger";
			break;
		case "warn":
			variant = "btn-warn";
			break;
		default:
			variant = "btn";
	}
	return (
		<button className={`btn ${variant}`} onClick={handleClick}>
			{btnText}
		</button>
	);
};
export default Button;
