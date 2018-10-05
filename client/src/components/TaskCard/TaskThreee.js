import React from "react";
import "./TaskCard.css";

const TaskThree = props => (

    <li className="collection-item">
    <div>
      Task 3: {props.task_3_Description}
      <br />
      Location: {props.task_3_Location}
      <br />
      Price: {props.task_3_PaymentAmount}
      <a href="#!" className="secondary-content">
        <i className="material-icons">{props.claim3}</i>
      </a>
    </div>
  </li>

);

export default TaskThree;