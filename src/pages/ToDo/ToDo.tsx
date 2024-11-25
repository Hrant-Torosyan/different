import React from "react";
import Title from "../../components/widgets/Title/Title";
import "./ToDo.scss";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoInfo from "./ToDoInfo";
const ToDo: React.FC = () => {
	return (
		<div className="todo">
			<Title title={"ToDo"} />
			<ToDoForm />
			<ToDoList />
			<ToDoInfo />
		</div>
	);
};

export default ToDo;
