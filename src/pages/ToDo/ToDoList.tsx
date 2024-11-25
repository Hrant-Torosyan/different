import React from "react";
import TodoCard from "../../components/shared/cards/TodoCard/TodoCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeTodo, toggleComplete } from "../../redux/slices/todoSlice";

const ToDoList: React.FC = () => {
	const { todos } = useAppSelector((state) => state.todo);
	const dispatch = useAppDispatch();

	const handleComplate = (id: number) => {
		dispatch(toggleComplete(id));
	};
	const handleRemove = (id: number) => {
		dispatch(removeTodo(id));
	};
	return (
		<div className="todosList scroll">
			{todos.map((item, key) => (
				<TodoCard
					key={key}
					handleRemove={handleRemove}
					handleComplate={handleComplate}
					{...item}
				/>
			))}
		</div>
	);
};

export default ToDoList;
