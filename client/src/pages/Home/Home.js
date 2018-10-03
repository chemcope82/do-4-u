import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import bg1 from './images/bg1.jpg';
import API from "../../utils/API";

const HomeStyle = {
  backgroundImage: "url(" + bg1 + ")"
};

class Home extends Component {
  state = {
    email: '',
    password: '',

  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    if (name === "password") {
      value = value.substring(0, 30);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)

    event.preventDefault();
    console.log(`Login Attempted by ${this.state.email} using password ${this.state.password}`);
    if (!this.state.email || !this.state.password) {
      alert("Please enter your email and password to login");
      return
    }

    API.login({
      email: this.state.email,
      password: this.state.password
    })
    .then(res => console.log(`token: ${res.data.token}`))
    .catch(err => console.log(err));
    
    this.setState({
      email: '',
      password: '',
    });
  }
  render() {
    return (
      <div className="bg" style={HomeStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo blue-grey-text darken-8-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/Signup" className="blue-grey-text darken-8-text">Sign Up</a></li>
            </ul>
          </div>
        </nav>

        <div className="container blur homeForm">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name='email'
                    type='email'
                    placheholder='abc@domain.com'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <label for="email" className="teal-text accent-4-text">Email</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name='password'
                    type='password'
                    placheholder='******'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <label for="password" className="teal-text accent-4-text">Password</label>
                </div>
              </div>

              <div className="center-align">
                <button className="btn waves-effect waves-light" id="loginBtn" onClick={this.handleFormSubmit}>Log In</button>
              </div>
            </form>
          </div>
        </div>

  </div>
    )
  }
}


// class Home extends Component {
//   render() {
//     return (

//       // <Container fluid>
//         <Jumbotron>
//           <h1>Home Page</h1>
//         </Jumbotron>
//       // </Container>

//     );
//   }
// }

export default Home;