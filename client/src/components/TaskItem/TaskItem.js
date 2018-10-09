import React from "react";
import "./TaskItem.css";


const TaskItem = props => (
    <div className="collection-item">
    <span>Task: {props.taskDescription}</span>
    <br />
    <span>Location: {props.taskLocation}</span>
    <br />
    <span>Payment Amount: ${props.taskPayment}</span>
    {props.children}
    </div>
);

export default TaskItem;