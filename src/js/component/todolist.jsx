import React, { useState } from "react";

const TodoList = () => {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="container border border-dark">
			<input
				type="text"
				onChange={e => {
					setInputValue(e.target.value);
				}}
				value={inputValue}
				onKeyPress={e =>
					e.key === "Enter" ? setList(list.concat(inputValue)) : null
				}
			/>
			<ul>
				<li>{list[0]}</li>
				<hr />
				<li>{list[1]}</li>
				<hr />
				<li>{list[2]}</li>
				<hr />
				<li>{list[3]}</li>
				<hr />
			</ul>
			<p>4 items left</p>
		</div>
	);
};

export default TodoList;
