import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	const handleClickX = () => {
		// when user press 'X' we update the list of task removing the task pressed
		// filter returns all the items of list except who has i == props.index. (index of this task)
		props.fSet(props.list.filter((e, i) => i !== props.index));
	};

	return (
		<div className="row">
			<div className="col-auto me-auto">{props.list[props.index]}</div>
			<div className="col-auto" onClick={handleClickX}>
				<a href="#">X</a>
			</div>
		</div>
	);
};

Task.propTypes = {
	index: PropTypes.number,
	list: PropTypes.array,
	fSet: PropTypes.func
};

export default Task;
