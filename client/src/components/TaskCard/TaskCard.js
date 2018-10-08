import React from "react";
import "./TaskCard.css";

const TaskCard = props => (
  <div className="col s6">
    <ul className="collection with-header blur radius">
      <li className="collection-header">
        <h5>Due on {props.month}/{props.day}/{props.year} at {props.hour}:{props.minute}</h5>
        <h6>List Total ${props.total}</h6>
        <h6>Delivery Location: {props.deliveryAddress}</h6>
        <h6>Customer: {props.firstName} {props.lastName}</h6>
        <h6>Phone: {props.phone}</h6>
        {/* <a href="#!" className="secondary-content"><i className="material-icons">Claim All</i></a> */}
        <span onClick={() => props.claimAll(props.id)} className="secondary-content">
          {props.ClaimAllTasks}
        </span>
        <br />
      </li>
      <li className="collection-item">
        <div>
           {props.task_1_Description}
          <br />
           {props.task_1_Location}
          <br />
           {props.task_1_PaymentAmount}
          {/* <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a> */}
          <span onClick={() => props.claimOne(props.id)} className="secondary-content">
          {props.ClaimOneTask}
        </span>
        {props.ClaimedOne}
        
        </div>
      </li>
      <li className="collection-item">
        <div>
           {props.task_2_Description}
          <br />
           {props.task_2_Location}
          <br />
           {props.task_2_PaymentAmount}
          {/* <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a> */}
          <span onClick={() => props.claimTwo(props.id)} className="secondary-content">
          {props.ClaimTwoTask}
        </span>
        </div>
      </li>
      <li className="collection-item">
        <div>
           {props.task_3_Description}
          <br />
          {props.task_3_Location}
          <br />
           {props.task_3_PaymentAmount}
          {/* <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a> */}
          <span onClick={() => props.claimThree(props.id)} className="secondary-content">
          {props.ClaimThreeTask}
        </span>
        </div>
      </li>
      <li className="collection-item">
        <div>
           {props.task_4_Description}
          <br />
           {props.task_4_Location}
          <br />
           {props.task_4_PaymentAmount}
          {/* <a href="#!" className="secondary-content">
            <i className="material-icons">Claim</i>
          </a> */}
          <span onClick={() => props.claimFour(props.id)} className="secondary-content">
          {props.ClaimFourTask}
        </span>
        </div>
      </li>
    </ul>
  </div>
);

export default TaskCard;