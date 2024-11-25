import React from "react";
import style from "./Button.module.scss";

type ButtonProps = {
	type: "submit" | "button";
	text: string;
	onClick?: () => void;
	className?: string;
	variant: "DEFAULT" | "DEL";
	disabled: boolean;
};
const Button: React.FC<ButtonProps> = ({ type, text, onClick, className, variant, disabled }) => {
	return (
		<button
			className={`${style.button} ${
				variant === "DEFAULT" ? style.default : variant === "DEL" ? style.del : ""
			} ${className ? className : ""} ${disabled ? style.DIS : ""} `}
			onClick={() => onClick && disabled && onClick()}
			disabled={disabled}
			type={type}
		>
			{text}
		</button>
	);
};

export default Button;
