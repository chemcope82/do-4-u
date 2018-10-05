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

    dateDoneBy: '',
    timeDoneBy: '',

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

      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,

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

      dateDoneBy: '',
      timeDoneBy: '',

      deliveryAddress: '',
    })
  }
  render() {
    return (
      <div className="bg" style={userStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text left hide-on-small-only" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" class="right">
              <li><a href="/userlist" className=" white-text">My User Lists</a></li>
              <li><a href="/runner" className=" white-text">Runner Portal</a></li>
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
                <textarea id="task_1_Description" class="materialize-textarea" data-length="120"
                  name='task_1_Description'
                  placeholder='Pick up dry-cleaning'
                  value={this.state.task_1_Description}
                  onChange={this.handleInputChange}
                />
                <label for="task_1_Description" className="teal-text accent-4-text active">Task 1</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_1_Location'
                  placeholder='700 W 1st Street, Austin, TX 78721'
                  value={this.state.task_1_Location}
                  onChange={this.handleInputChange}
                />
                <label for="task_1_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_1_PaymentAmount'
                  placeholder='10.00'
                  value={this.state.task_1_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label for="task_1_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 2 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_2_Description" class="materialize-textarea" data-length="120"
                  name='task_2_Description'
                  placeholder='Pick up dog from doggie-daycare'
                  value={this.state.task_2_Description}
                  onChange={this.handleInputChange}
                />
                <label for="task_2_Description" className="teal-text accent-4-text active">Task 2</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_2_Location'
                  placeholder='2200 Airport, Austin, TX 78723'
                  value={this.state.task_2_Location}
                  onChange={this.handleInputChange}
                />
                <label for="task_2_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_2_PaymentAmount'
                  placeholder='10.00'
                  value={this.state.task_2_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label for="task_2_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>

            {/* task 3 */}

            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_3_Description" class="materialize-textarea" data-length="120"
                  name='task_3_Description'
                  placeholder='Mow front lawn - equipment in shed'
                  value={this.state.task_3_Description}
                  onChange={this.handleInputChange}
                />
                <label for="task_3_Description" className="teal-text accent-4-text active">Task 3</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_3_Location'
                  placeholder='123 ABC Street, Austin, TX 78750'
                  value={this.state.task_3_Location}
                  onChange={this.handleInputChange}
                />
                <label for="task_3_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_3_PaymentAmount'
                  placeholder='20.00'
                  value={this.state.task_3_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label for="task_3_PaymentAmount" className="teal-text accent-4-text active">$</label>
              </div>
            </div>


            {/* task 4 */}
            <div className="row taskContainer radius blur">
              <div className="input-field col s12">
                <textarea id="task_4_Description" class="materialize-textarea" data-length="120"
                  name='task_4_Description'
                  placeHolder='Pick up items from grocery store: 1/2 gal milk, loaf of bread'
                  value={this.state.task_4_Description}
                  onChange={this.handleInputChange}
                />
                <label for="task_4_Description" className="teal-text accent-4-text active">Task 4</label>
              </div>
              <div className="input-field col s9">
                <input
                  name='task_4_Location'
                  placeholder='HEB (any)'
                  value={this.state.task_4_Location}
                  onChange={this.handleInputChange}
                />
                <label for="task_4_Location" className="teal-text accent-4-text active">Location</label>
              </div>
              <div className="input-field col s3">
                <input
                  name='task_4_PaymentAmount'
                  placeholder='15.00'
                  value={this.state.task_4_PaymentAmount}
                  onChange={this.handleInputChange}
                />
                <label for="task_4_PaymentAmount" className="teal-text accent-4-text active">$</label>
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
                  name='dateDoneBy'
                  value={this.state.dateDoneBy}
                  placeholder="1/1/2019"
                  onChange={this.handleInputChange}
                />
                <label for="task_2_Description" className="teal-text accent-4-text active">List Expires On (dateDoneBy)</label>
              </div>
              <div className="input-field col s6">
                <input
                  name='timeDoneBy'
                  value={this.state.timeDoneBy}
                  placeholder="3:00 pm"
                  onChange={this.handleInputChange}
                />
                <label for="price" className="teal-text accent-4-text active">At (timeDoneBy)</label>
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