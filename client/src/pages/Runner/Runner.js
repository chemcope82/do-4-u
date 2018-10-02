import React from 'react';
import bg8 from './images/bg8.jpg';

const runnerStyle = {
  backgroundImage: "url(" + bg8 + ")"
};
export default class Runner extends React.Component {
  state = {
    date: '',
    time: '',
    deliveryLocation: '',
    firstName: '',
    lastName: '',
    phone: '',

    taskOne: '',
    priceOne: '',
    addressOne: '',

    taskTwo: '',
    priceTwo: '',
    addressTwo: '',

    taskThree: '',
    priceThree: '',
    addressThree: '',

    taskFour: '',
    priceFour: '',
    addressFour: '',


  }
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
        
        <div className="row runner">
          <div className="">
            <div className="col s12">


              <div className="col s6">
                <ul className="collection with-header blur radius">
                  <li className="collection-header">
                    <h5>Due on {this.state.date} at {this.state.time}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryLocation}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.taskOne}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.priceOne}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.taskTwo}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.priceTwo}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.taskThree}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.priceThree}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.taskFour}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.priceFour}
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
                    <h5>Due on {this.state.date} at {this.state.time}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryLocation}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.taskOne}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.priceOne}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.taskTwo}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.priceTwo}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.taskThree}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.priceThree}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.taskFour}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.priceFour}
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
                    <h5>Due on {this.state.date} at {this.state.time}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryLocation}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.taskOne}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.priceOne}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.taskTwo}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.priceTwo}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.taskThree}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.priceThree}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.taskFour}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.priceFour}
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
                    <h5>Due on {this.state.date} at {this.state.time}</h5>
                    <h6>List Total ${this.state.total}</h6>
                    <h6>Delivery Location: {this.state.deliveryLocation}</h6>
                    <h6>Customer: {this.state.firstName} {this.state.lastName}</h6>
                    <h6>Phone: {this.state.phone}</h6>
                    <a href="#!" className="secondary-content"><i className="material-icons">Select All</i></a>
                    <br />
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 1: {this.state.taskOne}
                      <br />
                      Location: {this.state.locationOne}
                      <br />
                      Price: {this.state.priceOne}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 2: {this.state.taskTwo}
                      <br />
                      Location: {this.state.locationTwo}
                      <br />
                      Price: {this.state.priceTwo}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 3: {this.state.taskThree}
                      <br />
                      Location: {this.state.locationThree}
                      <br />
                      Price: {this.state.priceThree}
                      <a href="#!" className="secondary-content">
                        <i className="material-icons">Select</i>
                      </a>
                    </div>
                  </li>
                  <li className="collection-item">
                    <div>
                      Task 4: {this.state.taskFour}
                      <br />
                      Location: {this.state.locationFour}
                      <br />
                      Price: {this.state.priceFour}
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