import React from "react";
import "./TaskCard.css";

const TaskOne = props => (

    <li className="collection-item">
    <div>
      Task 1: {props.task_1_Description}
      <br />
      Location: {props.task_1_Location}
      <br />
      Price: {props.task_1_PaymentAmount}
      <a href="#!" className="secondary-content">
        <i className="material-icons">{props.claim1}</i>
      </a>
    </div>
  </li>

);

export default TaskOne;