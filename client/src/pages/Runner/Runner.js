import React from 'react';
import bg8 from './images/bg8.jpg';
import API from "../../utils/API";

const runnerStyle = {
  backgroundImage: "url(" + bg8 + ")"
};

const runnerContainerStyle = {
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
      
      <div className="bg" style={runnerStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/" className=" white-text">Log In</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>
        
        <div className="row runner" style={runnerContainerStyle}>
          <div className="">
            <div className="col s12">


              <div className="col s6">
                <ul className="collection with-header blur radius">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col s6">
                <ul className="collection with-header blur radius">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col s6">
                <ul className="collection with-header blur radius">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col s6">
                <ul className="collection with-header blur radius">
                  <li className="collection-header">
                    <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryAddress}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.task_1_Description}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.task_1_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.task_2_Description}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.task_2_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.task_3_Description}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.task_3_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.task_4_Description}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.task_4_PaymentAmount}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
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