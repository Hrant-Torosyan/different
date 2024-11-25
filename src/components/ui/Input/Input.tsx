import React from "react";
import style from "./Input.module.scss";

type InputProps = {
	type: "num" | "text";
	placholder: string;
	val: string;
	setVal: (value: string) => void;
	className?: string;
};

const Input: React.FC<InputProps> = ({ type, placholder, val, setVal, className }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (type === "text") {
			setVal(e.target.value);
		}
	};

	return (
		<input
			value={val}
			type={type}
			onChange={handleChange}
			placeholder={placholder}
			className={`${style.input} ${className ? className : ""}`}
		/>
	);
};

export default Input;
