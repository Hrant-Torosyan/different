import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const ToDoInfo: React.FC = () => {
	const { todos } = useAppSelector((state) => state.todo);
	let filteredTodos = todos.filter((item) => item.completed === true);
	return (
		<div className="todoInfo">
			<p>
				{filteredTodos.length}/{todos.length}
			</p>
		</div>
	);
};

export default ToDoInfo;
