import React from "react";
// import Jumbotron from "../../components/Jumbotron";
import bg3 from './images/bg3.jpg';
import API from "../../utils/API";

const userStyle = {
  backgroundImage: "url(" + bg3 + ")"
};

const UserFormStyle = {
  height: 80 + '%',
}

class User extends React.Component {
  state = {
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

    total: '',

    // dateDoneBy: '',
    // timeDoneBy: '',
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: '',
    amOrPm: '',

    deliveryAddress: '',
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


    // // Alert for description
    // if (!this.state.task_1_Description || !this.state.task_2_Description || !this.state.task_3_Description || !this.state.task_4_Description) {
    //   alert("Please fill out a description for each task!");
    //   return;
    //   // Alert for price
    // } else if (!this.state.task_1_PaymentAmount || !this.state.task_2_PaymentAmount || !this.state.task_3_PaymentAmount || !this.state.task_4_PaymentAmount) {
    //   alert("Please fill out a price for each task!!");
    //   return;
    // }
    // // Alert for location
    // else if (!this.state.task_1_Location || !this.state.task_2_Location || !this.state.task_3_Location || !this.state.task_3_Location) {
    //   alert("Please fill out a location for each task!");
    //   return;
    // }
    // // Alert for bonus total
    // else if (!this.state.total) {
    //   alert("Please fill out a bonus total!");
    //   return;
    // }
    // // Alert for month
    // else if (!this.state.month) {
    //   alert("Please input expiration month!");
    //   return;
    // }
    // // Alert for day
    // else if (!this.state.day) {
    //   alert("Please input expiration day!");
    //   return;
    // }
    // // Alert for year
    // else if (!this.state.year) {
    //   alert("Please input expiration year!");
    //   return;
    // }
    // // Alert for hour
    // else if (!this.state.hour) {
    //   alert("Please input expiration hour!");
    //   return;
    // }
    // // Alert for minute
    // else if (!this.state.minute) {
    //   alert("Please input expiration minute!");
    //   return;
    // }
    // // Alert for AM or PM
    // else if (!this.state.amOrPm) {
    //   alert("Please choose AM or PM!");
    //   return;
    // }



















    API.saveTask({

      task_1_Description: this.state.task_1_Description,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Location: this.state.task_1_Location,

      task_2_Description: this.state.task_2_Description,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Location: this.state.task_2_Location,

      task_3_Description: this.state.task_3_Description,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Location: this.state.task_3_Location,

      task_4_Description: this.state.task_4_Description,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Location: this.state.task_4_Location,

      total: this.state.total,

      // dateDoneBy: this.state.dateDoneBy,
      // timeDoneBy: this.state.timeDoneBy,
      month: this.state.month,
      day: this.state.day,
      year: this.state.year,
      hour: this.state.hour,
      minute: this.state.minute,
      amOrPm: this.state.amOrPm,

      deliveryAddress: this.state.deliveryAddress
    })
      // logging in browser console
      .then(res => console.log(res))
      .catch(err => console.log(err));


    this.setState({
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

      total: '',

      // dateDoneBy: '',
      // timeDoneBy: '',
      month: '',
      day: '',
      year: '',
      hour: '',
      minute: '',
      amOrPm: '',

      deliveryAddress: '',
    })
  }


  render() {
    return (
      <div className="bg" style={userStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/runner" className=" white-text">Runner Portal</a></li>

              {/* I think we should be linking pages like the example below in react */}
              {/* <Link to={"/runner"}>
                {"Runner Portal"}
              </Link> */}
              <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text pageTitle">Create a List</p>

        <div className="row container userForm" style={UserFormStyle}>
          <form className="col s12">
            {/* task 1 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_1_Description" className="materialize-textarea" data-length="120"
                  name='task_1_Description'
                  placeholder='Pick up dry-cleaning'
                  value={this.state.task_1_Description}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_1_Description" className="teal-text accent-4-text active">Task 1</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_1_Location'
                  placeholder='700 W 1st Street, Austin, TX 78721'
                  value={this.state.task_1_Location}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_1_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_1_PaymentAmount'
                  placeholder='10.00'
                  value={this.state.task_1_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_1_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 2 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_2_Description" className="materialize-textarea" data-length="120"
                  name='task_2_Description'
                  placeholder='Pick up dog from doggie-daycare'
                  value={this.state.task_2_Description}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_Description" className="teal-text accent-4-text active">Task 2</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_2_Location'
                  placeholder='2200 Airport, Austin, TX 78723'
                  value={this.state.task_2_Location}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_2_PaymentAmount'
                  placeholder='10.00'
                  value={this.state.task_2_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 3 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_3_Description" className="materialize-textarea" data-length="120"
                  name='task_3_Description'
                  placeholder='Mow front lawn - equipment in shed'
                  value={this.state.task_3_Description}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_3_Description" className="teal-text accent-4-text active">Task 3</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_3_Location'
                  placeholder='123 ABC Street, Austin, TX 78750'
                  value={this.state.task_3_Location}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_3_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_3_PaymentAmount'
                  placeholder='20.00'
                  value={this.state.task_3_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_3_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>


            {/* task 4 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_4_Description" className="materialize-textarea" data-length="120"
                  name='task_4_Description'
                  placeholder='Pick up items from grocery store: 1/2 gal milk, loaf of bread'
                  value={this.state.task_4_Description}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_4_Description" className="teal-text accent-4-text active">Task 4</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_4_Location'
                  placeholder='HEB (any)'
                  value={this.state.task_4_Location}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_4_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_4_PaymentAmount'
                  placeholder='15.00'
                  value={this.state.task_4_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_4_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* TOTAL */}

            <div className="totalContainer row blur radius">
              <div className="input-field col s9">
                <input
                  name='deliveryAddress'
                  placeholder='700 W 1st Street, Austin, TX 78721'
                  value={this.state.deliveryAddress}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="total" className="teal-text accent-4-text active">Delivery Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='total'
                  placeholder='55.00'
                  value={this.state.total}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="total" className="teal-text accent-4-text active">Total</label>
              </div>
            </div>

            {/* EXPIRES */}
            <div className="row blur radius">
              <h5 htmlFor="task_2_Description" className="teal-text accent-4-text active center">When do you want your list to expire?</h5>

              {/* Month */}
              <div className="input-field col s2">
                <input
                  name='month'
                  value={this.state.month}
                  placeholder="12"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_Description" className="teal-text accent-4-text active">Month (1-12)</label>
              </div>

              {/* Day */}
              <div className="input-field col s2">
                <input
                  name='day'
                  value={this.state.day}
                  placeholder="25"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_Description" className="teal-text accent-4-text active">Day (1-31)</label>
              </div>

              {/* Year */}
              <div className="input-field col s2">
                <input
                  name='year'
                  value={this.state.year}
                  placeholder="2018"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="task_2_Description" className="teal-text accent-4-text active">Year</label>
              </div>

              {/* Hour */}
              <div className="input-field col s2">
                <input
                  name='hour'
                  value={this.state.hour}
                  placeholder="1"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="price" className="teal-text accent-4-text active">Hour (1-24)</label>
              </div>

              {/* Minute */}
              <div className="input-field col s2">
                <input
                  name='minute'
                  value={this.state.minute}
                  placeholder="0"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="price" className="teal-text accent-4-text active">Minute (0-59)</label>
              </div>

              {/* AM or PM */}
              <div className="input-field col s2">
                <input
                  name='amOrPm'
                  value={this.state.amOrPm}
                  placeholder="PM"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="price" className="teal-text accent-4-text active">AM or PM</label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="center-align">
              <button className="btn waves-effect waves-light" id="do4meBtn" onClick={this.handleFormSubmit}>Do-4-Me</button>
            </div>
            <br />
          </form>
        </div>
      </div>
    )
  }
}

export default User;