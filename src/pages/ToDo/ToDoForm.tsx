import React, { useState } from "react";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addTodo } from "../../redux/slices/todoSlice";

const ToDoForm: React.FC = () => {
	const dispatch = useAppDispatch();

	const [value, setValue] = useState<string>("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value.trim()) {
			dispatch(addTodo(value));
		}
	};
	return (
		<form className="todoForm" onSubmit={handleSubmit}>
			<Input val={value} setVal={setValue} type={"text"} placholder={"text"} />
			<Button variant={"DEFAULT"} text={"Create"} type={"submit"} disabled={true} />
		</form>
	);
};

export default ToDoForm;
