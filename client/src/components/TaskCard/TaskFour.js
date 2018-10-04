import React from "react";
import "./TaskCard.css";

const TaskFour = props => (

    <li className="collection-item">
    <div>
      Task 4: {props.task_4_Description}
      <br />
      Location: {props.task_4_Location}
      <br />
      Price: {props.task_4_PaymentAmount}
      <a href="#!" className="secondary-content">
        <i className="material-icons">{props.claim4}</i>
      </a>
    </div>
  </li>

);

export default TaskFour;
