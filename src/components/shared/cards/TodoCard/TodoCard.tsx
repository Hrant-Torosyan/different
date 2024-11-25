import React from "react";

import "./TodoCard.scss";
import Button from "../../../ui/Button/Button";

interface TodoCardProps {
	id: number;
	text: string;
	completed: boolean;
	handleComplate: (id: number) => void;
	handleRemove: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
	id,
	text,
	completed,
	handleComplate,
	handleRemove,
}) => {
	return (
		<div className="todoCard">
			<div onClick={() => handleComplate(id)} className="checkboxBlock">
				<div className={`checkbox ${completed ? "completed" : ""}`}></div>
				<p>{text}</p>
			</div>

			<Button variant={"DEL"} onClick={() => handleRemove(id)} text={"Delete"} type={"button"} />
		</div>
	);
};

export default TodoCard;
