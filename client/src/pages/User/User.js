import React from "react";
// import Jumbotron from "../../components/Jumbotron";

class User extends React.Component {
  state = {
    itemOne: '',
    priceOne: '',

    itemTwo: '',
    priceTwo: '',

    itemThree: '',
    priceThree: '',

    itemFour: '',
    priceFour: '',

    total: '',

    date: '',
    time: ''
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Please enter a first and last name!");
      return;

    }
    else if (this.state.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }
    else if (!this.state.address || !this.state.city || !this.state.state || !this.state.zip) {
      alert("Please enter a address, city, state, and zip code!");
      return;
    }
    this.setState({
      itemOne: '',
      priceOne: '',

      itemTwo: '',
      priceTwo: '',

      itemThree: '',
      priceThree: '',

      itemFour: '',
      priceFour: '',

      total: '',

      date: '',
      time: ''
    })
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <form className="col s12">

            {/* ITEM 1 */}
            <div class="row">
              <div class="input-field col s6">
                <input
                  name='itemOne'
                  value={this.state.itemOne}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Item 1</label>
              </div>
              <div class="input-field col s6">
                <input
                  name='priceOne'
                  value={this.state.priceOne}
                  onChange={this.handleInputChange}
                />
                <label for="price">$</label>
              </div>
            </div>

            {/* ITEM 2 */}
            <div class="row">
              <div class="input-field col s6">
                <input
                  name='itemTwo'
                  value={this.state.itemTwo}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Item 2</label>
              </div>
              <div class="input-field col s6">
                <input
                  name='priceTwo'
                  value={this.state.priceTwo}
                  onChange={this.handleInputChange}
                />
                <label for="price">$</label>
              </div>
            </div>

            {/* ITEM 3 */}
            <div class="row">
              <div class="input-field col s6">
                <input
                  name='itemThree'
                  value={this.state.itemThree}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Item 3</label>
              </div>
              <div class="input-field col s6">
                <input
                  name='priceThree'
                  value={this.state.priceThree}
                  onChange={this.handleInputChange}
                />
                <label for="price">$</label>
              </div>
            </div>

            {/* ITEM 4 */}
            <div class="row">
              <div class="input-field col s6">
                <input
                  name='itemFour'
                  value={this.state.itemFour}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Item 4</label>
              </div>
              <div class="input-field col s6">
                <input
                  name='priceFour'
                  value={this.state.priceFour}
                  onChange={this.handleInputChange}
                />
                <label for="price">$</label>
              </div>
            </div>

            {/* TOTAL */}
            <div class="row">
              <div class="input-field col s6 offset-s6">
                <input
                  name='total'
                  value={this.state.total}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Total</label>
              </div>
            </div>

            {/* EXPIRES */}
            <div class="row">
              <div class="input-field col s6">
                <input
                  name='date'
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
                <label for="itemOne">Date</label>
              </div>
              <div class="input-field col s6">
                <input
                  name='time'
                  value={this.state.time}
                  onChange={this.handleInputChange}
                />
                <label for="price">Time</label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="center-align">
              <button className="btn waves-effect waves-light" onClick={this.handleFormSubmit}>Submit</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default User;