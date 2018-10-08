import React from 'react';
import bg12 from './images/bg12.jpeg';
import API from "../../utils/API";

const RunnerListStyle = {
  backgroundImage: "url(" + bg12 + ")"
};

const RunnerListContainerStyle = {
  height: 80 + '%',
  overflow: 'auto'
}

export default class RunnerLists extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',

    customer: '',
    customer_phone: '',

    task_1_Description: '',
    task_1_PaymentAmount: '',
    task_1_Location: '',

    task_2_Description: '',
    task_2_PaymentAmount: '',
    task_2_Location: '',

    task_3_Description: '',
    task_3_PaymentAmount: '',
    task_3_Location: '',

    task_4_Description: '',
    task_4_PaymentAmount: '',
    task_4_Location: '',

    dateDoneBy: '',
    timeDoneBy: '',

    deliveryAddress: '',
    ListStatus: '',


  }

  componentDidMount() {
    API.getTasks()
      .then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          this.setState({
            task_1_Description: res.data[0].task_1_Description
          })
        }
      })
      .catch(err => console.log(err));


    console.log("working");

    console.log(this.state.task_1_Description);
  };

  handleSignout = event => {
    event.preventDefault();
    
    API.logout();
  }


  render() {
    return (
      <div className="bg" style={RunnerListStyle}>
        <div className="row">
          <div className="col s12">
            <nav className="transparent z-depth-0">
              <div className="nav-wrapper">
                <p className="brand-logo left deep-orange-text darken-10-text hide-on-small-only" id="slogan"> Do More. Work Less.</p>
                <ul id="nav-mobile" className="right">
                <li><a href="/runner" className="deep-orange-text darken-10-text">Runner Portal</a></li>
              <li><a href="/user" className="deep-orange-text darken-10-text">User Portal</a></li>
              <li><a href="/" onClick={this.handleSignout} className="signoutBtn deep-orange-text darken-10-text">Sign Out</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <p className="center deep-orange-text darken-10-text pageTitle">Your Runner Lists</p>

        <div className="row runner" style={RunnerListContainerStyle}>
          <div className="">
            <div className="col s12">
              <div className="col m6 s12">
                <ul className="collection with-header blur radius userLists">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Status: {this.state.listStatus}</h6>
                    <h6>List Total: ${this.state.total}</h6>
                    <h6>Customer: {this.state.customer} | {this.state.customer_phone}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                  </li>
                  <li className="collection-item">
                    <div>
                      <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <br />
                      Status: {this.state.task_1_Status}
                      <br />
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <br />
                      Status: {this.state.task_2_Status}
                      <br />
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <br />
                      Status: {this.state.task_3_Status}
                      <br />
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <br />
                      Status: {this.state.task_4_Status}
                      <br />
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
