import React, { useState } from "react";

import Task from "./task.jsx";

const TodoList = () => {
	// we define list as a list of tasks. The initial value is []
	const [list, setList] = useState([]);
	// inputValue is the value of tag <input>
	const [inputValue, setInputValue] = useState("");

	// we map list on listItems to do the html
	// each item has a Task container to represent the task.
	// we pass the list and setList function because Task will update the list of tasks.
	const listItems = list.map((value, index) => {
		return (
			<div key={index}>
				<Task
					strItem={value}
					fDelete={() => setList(list.filter((e, i) => i !== index))}
				/>
				<hr />
			</div>
		);
	});

	return (
		<div className="container border border-danger bg-warning bg-opacity-25 p-2">
			<input
				className="mb-3 w-75"
				type="text"
				placeholder="Next task to do..."
				onChange={e => {
					setInputValue(e.target.value);
				}}
				value={inputValue}
				onKeyPress={e => {
					if (e.key === "Enter") {
						setList(list.concat(inputValue));
						setInputValue("");
					}
				}}
			/>
			<div className="px-3">{listItems}</div>
			<p className="text-start px-3 fw-bold">{list.length} items left</p>
		</div>
	);
};

export default TodoList;