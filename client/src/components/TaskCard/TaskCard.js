import React from "react";
import "./TaskCard.css";

const TaskCard = props => (
    <div className="col s6">
    <ul className="collection with-header blur radius">
      <li className="collection-header">
        <h5>Due on {props.dateDoneBy} at {props.timeDoneBy}</h5>
        <h6>List Total ${props.total}</h6>
        <h6>Delivery Location: {props.deliveryAddress}</h6>
        <h6>Customer: {props.firstName} {props.lastName}</h6>
        <h6>Phone: {props.phone}</h6>
        <a href="#!" className="secondary-content"><i className="material-icons">Claim All</i></a>
        <br />
      </li>
      <li className="collection-item">
        <div>
          Task 1: {props.task_1_Description}
          <br />
          Location: {props.task_1_Location}
          <br />
          Price: {props.task_1_PaymentAmount}
          <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a>
        </div>
      </li>
      <li className="collection-item">
        <div>
          Task 2: {props.task_2_Description}
          <br />
          Location: {props.task_2_Location}
          <br />
          Price: {props.task_2_PaymentAmount}
          <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a>
        </div>
      </li>
      <li className="collection-item">
        <div>
          Task 3: {props.task_3_Description}
          <br />
          Location: {props.task_3_Location}
          <br />
          Price: {props.task_3_PaymentAmount}
          <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a>
        </div>
      </li>
      <li className="collection-item">
        <div>
          Task 4: {props.task_4_Description}
          <br />
          Location: {props.task_4_Location}
          <br />
          Price: {props.task_4_PaymentAmount}
          <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default TaskCard;