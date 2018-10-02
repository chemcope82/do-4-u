import React from "react";
// import Jumbotron from "../../components/Jumbotron";
import bg3 from './images/bg3.jpg';
import API from "../../utils/API";

const userStyle = {
  backgroundImage: "url(" + bg3 + ")"
};

class User extends React.Component {
  state = {
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

    total: '',

    date: '',
    time: '',

    deliveryLocation: '',
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    API.saveTask({

      taskOne: this.state.taskOne,
      priceOne: this.state.priceOne,
      addressOne: this.state.addressOne,

      taskTwo: this.state.taskTwo,
      priceTwo: this.state.priceTwo,
      addressTwo: this.state.addressTwo,

      taskThree: this.state.taskThree,
      priceThree: this.state.priceThree,
      addressThree: this.state.addressThree,

      taskFour: this.state.taskFour,
      priceFour: this.state.priceFour,
      addressFour: this.state.addressFour,

      total: this.state.total,

      date: this.state.date,
      time: this.state.time,

      deliveryLocation: this.state.deliveryLocation
    })
    // logging in browser console
    .then(res => console.log(res))
    .catch(err => console.log(err));

    this.setState({
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

      total: '',

      date: '',
      time: '',

      deliveryLocation: '',
    })
  }
  render() {
    return (
      <div className="bg" style={userStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/runner" className=" white-text">Runner Portal</a></li>
              <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <div className="row container userForm">
          <form className="col s12">
            <p className="center white-text" id="createList">Create a List</p>

            {/* task 1 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="taskOne" class="materialize-textarea" data-length="120"
                  name='taskOne'
                  placeholder='Pick up dry-cleaning'
                  value={this.state.taskOne}
                  onChange={this.handleInputChange}
                />
                <label for="taskOne" className="teal-text accent-4-text active">Task 1</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='addressOne'
                  placeholder='700 W 1st Street, Austin, TX 78721'
                  value={this.state.addressOne}
                  onChange={this.handleInputChange}
                />
                <label for="addressOne" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceOne'
                  placeholder='10.00'
                  value={this.state.priceOne}
                  onChange={this.handleInputChange}
                />
                <label for="priceOne" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 2 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="taskTwo" class="materialize-textarea" data-length="120"
                  name='taskTwo'
                  placeholder='Pick up dog from doggie-daycare'
                  value={this.state.taskTwo}
                  onChange={this.handleInputChange}
                />
                <label for="taskTwo" className="teal-text accent-4-text active">Task 2</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='addressTwo'
                  placeholder='2200 Airport, Austin, TX 78723'
                  value={this.state.addressTwo}
                  onChange={this.handleInputChange}
                />
                <label for="addressTwo" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceTwo'
                  placeholder='10.00'
                  value={this.state.priceTwo}
                  onChange={this.handleInputChange}
                />
                <label for="priceTwo" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 3 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="taskThree" class="materialize-textarea" data-length="120"
                  name='taskThree'
                  placeholder='Mow front lawn - equipment in shed'
                  value={this.state.taskThree}
                  onChange={this.handleInputChange}
                />
                <label for="taskThree" className="teal-text accent-4-text active">Task 3</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='addressThree'
                  placeholder='123 ABC Street, Austin, TX 78750'
                  value={this.state.addressThree}
                  onChange={this.handleInputChange}
                />
                <label for="addressThree" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceThree'
                  placeholder='20.00'
                  value={this.state.priceThree}
                  onChange={this.handleInputChange}
                />
                <label for="priceThree" className="teal-text accent-4-text active">$</label>
              </div>
            </div>


            {/* task 4 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="taskFour" class="materialize-textarea" data-length="120"
                  name='taskFour'
                  placeHolder='Pick up items from grocery store: 1/2 gal milk, loaf of bread'
                  value={this.state.taskFour}
                  onChange={this.handleInputChange}
                />
                <label for="taskFour" className="teal-text accent-4-text active">Task 4</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='addressFour'
                  placeholder='HEB (any)'
                  value={this.state.addressFour}
                  onChange={this.handleInputChange}
                />
                <label for="addressFour" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceFour'
                  placeholder='15.00'
                  value={this.state.priceFour}
                  onChange={this.handleInputChange}
                />
                <label for="priceFour" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* TOTAL */}

            <div className="totalContainer row blur radius">
              <div className="input-field col s9">
                <input
                  name='deliveryLocation'
                  placeholder='700 W 1st Street, Austin, TX 78721'
                  value={this.state.deliveryLocation}
                  onChange={this.handleInputChange}
                />
                <label for="total" className="teal-text accent-4-text active">Delivery Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='total'
                  placeholder='55.00'
                  value={this.state.total}
                  onChange={this.handleInputChange}
                />
                <label for="total" className="teal-text accent-4-text active">Total</label>
              </div>
            </div>

            {/* EXPIRES */}
            <div className="row blur radius">
              <div className="input-field col s6">
                <input
                  name='date'
                  value={this.state.date}
                  placeholder="1/1/2019"
                  onChange={this.handleInputChange}
                />
                <label for="taskTwo" className="teal-text accent-4-text active">List Expires On (Date)</label>
              </div>
              <div className="input-field col s6">
                <input
                  name='time'
                  value={this.state.time}
                  placeholder="3:00 pm"
                  onChange={this.handleInputChange}
                />
                <label for="price" className="teal-text accent-4-text active">At (Time)</label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="center-align">
              <button className="btn waves-effect waves-light" id="do4meBtn" onClick={this.handleFormSubmit}>Do-4-Me</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default User;