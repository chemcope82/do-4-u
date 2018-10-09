import React from "react";
import "./TaskCard.css";

const TaskCard = props => (
  <div className="col s6">
    <ul className="collection with-header blur radius">
      <li className="collection-header">
        <h5>Due on {props.month}/{props.day}/{props.year} at {props.hour}:{props.minute}{props.amOrPm}</h5>
        <h6>List Total ${props.total}</h6>
        <h6>Delivery Location: {props.deliveryAddress}</h6>
        <h6>Customer: {props.firstName} {props.lastName}</h6>
        <h6>Phone: {props.phone}</h6>
        {props.children}
      </li>
    </ul>
  </div>
);

export default TaskCard;