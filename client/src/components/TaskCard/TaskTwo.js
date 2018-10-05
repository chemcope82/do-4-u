import React from "react";
import "./TaskCard.css";

const TaskTwo = props => (

    <li className="collection-item">
    <div>
      Task 2: {props.task_2_Description}
      <br />
      Location: {props.task_2_Location}
      <br />
      Price: {props.task_2_PaymentAmount}
      <a href="#!" className="secondary-content">
        <i className="material-icons">{props.claim2}</i>
      </a>
    </div>
  </li>

);

export default TaskTwo;