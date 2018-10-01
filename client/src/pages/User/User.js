import React from "react";
// import Jumbotron from "../../components/Jumbotron";
import bg3 from './images/bg3.jpg';

const userStyle = {
  backgroundImage: "url(" + bg3 + ")"
};

class User extends React.Component {
  state = {
    taskOne: '',
    priceOne: '',
    addressOne: '',
    zipOne: '',

    taskTwo: '',
    priceTwo: '',
    addressTwo: '',
    zipTwo: '',

    taskThree: '',
    priceThree: '',
    addressThree: '',
    zipThree: '',

    taskFour: '',
    priceFour: '',
    addressFour: '',
    zipFour: '',

    total: '',

    date: '',
    time: '',

    deliveryLocation: '',
    deliveryZip: '',
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

    this.setState({
      taskOne: '',
      priceOne: '',
      addressOne: '',
      zipOne: '',

      taskTwo: '',
      priceTwo: '',
      addressTwo: '',
      zipTwo: '',

      taskThree: '',
      priceThree: '',
      addressThree: '',
      zipThree: '',

      taskFour: '',
      priceFour: '',
      addressFour: '',
      zipFour: '',

      total: '',

      date: '',
      time: '',

      deliveryLocation: '',
      deliveryZip: '',
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

            {/* task 1 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="taskOne" class="materialize-textarea" data-length="120"
                  name='taskOne'
                  value={this.state.taskOne}
                  onChange={this.handleInputChange}
                />
                <label for="taskOne" className="teal-text accent-4-text active">Task 1</label>
              </div>
              <div className="input-field col s6">
                <input
                  name='addressOne'
                  value={this.state.addressOne}
                  onChange={this.handleInputChange}
                />
                <label for="addressOne" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='zipOne'
                  value={this.state.priceOne}
                  onChange={this.handleInputChange}
                />
                <label for="zipOne" className="teal-text accent-4-text active">Zip</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceOne'
                  value={this.state.zipOne}
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
                  value={this.state.taskTwo}
                  onChange={this.handleInputChange}
                />
                <label for="taskTwo" className="teal-text accent-4-text active">Task 2</label>
              </div>
              <div className="input-field col s6">
                <input
                  name='addressTwo'
                  value={this.state.addressTwo}
                  onChange={this.handleInputChange}
                />
                <label for="addressTwo" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='zipTwo'
                  value={this.state.priceTwo}
                  onChange={this.handleInputChange}
                />
                <label for="zipTwo" className="teal-text accent-4-text active">Zip</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='priceTwo'
                  value={this.state.zipTwo}
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
                    value={this.state.taskThree}
                    onChange={this.handleInputChange}
                  />
                  <label for="taskThree" className="teal-text accent-4-text active">Task 3</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name='addressThree'
                    value={this.state.addressThree}
                    onChange={this.handleInputChange}
                  />
                  <label for="addressThree" className="teal-text accent-4-text active">Location</label>
                </div>
                <div className="input-field col s3">
                  <input
                    name='zipThree'
                    value={this.state.priceThree}
                    onChange={this.handleInputChange}
                  />
                  <label for="zipThree" className="teal-text accent-4-text active">Zip</label>
                </div>
                <div className="input-field col s3">
                  <input
                    name='priceThree'
                    value={this.state.zipThree}
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
                    value={this.state.taskFour}
                    onChange={this.handleInputChange}
                  />
                  <label for="taskFour" className="teal-text accent-4-text active">Task 4</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name='addressFour'
                    value={this.state.addressFour}
                    onChange={this.handleInputChange}
                  />
                  <label for="addressFour" className="teal-text accent-4-text active">Location</label>
                </div>
                <div className="input-field col s3">
                  <input
                    name='zipFour'
                    value={this.state.priceFour}
                    onChange={this.handleInputChange}
                  />
                  <label for="zipFour" className="teal-text accent-4-text active">Zip</label>
                </div>
                <div className="input-field col s3">
                  <input
                    name='priceFour'
                    value={this.state.zipFour}
                    onChange={this.handleInputChange}
                  />
                  <label for="priceFour" className="teal-text accent-4-text active">$</label>
                </div>
              </div>

            {/* TOTAL */}

            <div className="totalContainer row blur radius">
              <div className="input-field col s6">
                <input
                  name='deliveryLocation'
                  value={this.state.deliveryLocation}
                  onChange={this.handleInputChange}
                />
                <label for="total" className="teal-text accent-4-text active">Delivery Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='deliveryZip'
                  value={this.state.deliveryZip}
                  onChange={this.handleInputChange}
                />
                <label for="deliveryZip" className="teal-text accent-4-text active">Zip</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='total'
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
                  placeholder="mm/dd/yyyy"
                  onChange={this.handleInputChange}
                />
                <label for="taskTwo" className="teal-text accent-4-text active">List Expires On (Date)</label>
              </div>
              <div className="input-field col s6">
                <input
                  name='time'
                  value={this.state.time}
                  placeholder="hh:mm am/pm"
                  onChange={this.handleInputChange}
                />
                <label for="price" className="teal-text accent-4-text active">At (Time)</label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="center-align">
              <button className="btn waves-effect waves-light" id="do4meBtn" onClick={this.handleFormSubmit}>Do-4Me</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default User;