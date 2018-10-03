import React from 'react';
import bg6 from './images/bg6.jpg';
import API from "../../utils/API";

const UserListStyle = {
  backgroundImage: "url(" + bg6 + ")"
};

const UserListContainerStyle = {
  height: 80 + '%'
}

export default class Runner extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',

    task_1_Description: '',
    task_1_PaymentAmount: '',
    task_1_Location: '',
    task_1_Runner: '',
    task_1_Runner_Phone: '',

    task_2_Description: '',
    task_2_PaymentAmount: '',
    task_2_Location: '',
    task_2_Runner: '',
    task_2_Runner_Phone: '',

    task_3_Description: '',
    task_3_PaymentAmount: '',
    task_3_Location: '',
    task_3_Runner: '',
    task_3_Runner_Phone: '',

    task_4_Description: '',
    task_4_PaymentAmount: '',
    task_4_Location: '',
    task_4_Runner: '',
    task_4_Runner_Phone: '',

    dateDoneBy: '',
    timeDoneBy: '',

    deliveryAddress: '',
    ListStatus: '',


  }

  componentDidMount() {
    API.getTasks()
      .then(function(res) {
        for (var i = 0; i < res.data.length; i++){
          this.setState({
            task_1_Description: res.data[0].task_1_Description
          })
        }
      })
      .catch(err => console.log(err));


      console.log("working");

      console.log(this.state.task_1_Description);
  };


 
  
  render() {
    return (
      
      <div className="bg" style={UserListStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo blue-text text-darken-2" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/user" className="blue-text text-darken-2">Create List</a></li>
              <li><a href="/" className="blue-text text-darken-2" id="signout">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center blue-text text-darken-2 pageTitle">Your Lists</p>
        
        <div className="row runner" style={UserListContainerStyle}>
          <div className="">
            <div className="col s12">


              <div className="col s4">
                <ul className="collection with-header blur radius userLists">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Status {this.state.listStatus}</h6>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <br />
                      Status: {this.state.task_1_Status}
                      <br />
                      Runner: {this.state.task_1_Runner} | {this.state.task_1_Runner.Phone}
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <br />
                      Status: {this.state.task_2_Status}
                      <br />
                      Runner: {this.state.task_2_Runner} | {this.state.task_2_Runner.Phone}
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <br />
                      Status: {this.state.task_3_Status}
                      <br />
                      Runner: {this.state.task_3_Runner} | {this.state.task_3_Runner.Phone}
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <br />
                      Status: {this.state.task_4_Status}
                      <br />
                      Runner: {this.state.task_4_Runner} | {this.state.task_4_Runner.Phone}
                    </div>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
}
