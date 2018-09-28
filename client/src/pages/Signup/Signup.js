// import React from "react";
// import Jumbotron from "../../components/Jumbotron";

// const Signup = () =>

//         <Jumbotron>
//           <h1>Sign up Page</h1>
//         </Jumbotron>


// export default Signup;

import React from 'react';

export default class Signup extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        })
    }

    render() {
        return (
            <div class="container">
            <div class="row">
                <form className="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input
                                name='firstName'
                                type='text'
                                placeholder='John'
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                            />
                            <label for='firstName' className='active'>First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input
                                name='lastName'
                                type='text'
                                placeholder='Doe'
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                            />
                            <label for='lastName' className='active'>Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input
                                name='email'
                                type='email'
                                placeholder='abc@domain.com'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <label for="email" className='active'>Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input
                                name='password'
                                type='password'
                                placeholder='******'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <label for='password' className='active'>Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input
                                name='address'
                                type='text'
                                placeholder='123 ABC St'
                                value={this.state.address}
                                onChange={this.handleInputChange}
                            />
                            <label for='address' className='active'>Address</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4">
                            <input
                                name='city'
                                type='text'
                                placeholder='Austin'
                                value={this.state.city}
                                onChange={this.handleInputChange}
                            />
                            <label for="city" className='active'>City</label>
                        </div>
                        <div class="input-field col s4">
                            <input
                                name='state'
                                type='text'
                                placeholder='TX'
                                value={this.state.state}
                                onChange={this.handleInputChange}
                            />
                            <label for='state' className='active'>State</label>
                        </div>
                        <div class="input-field col s4">
                            <input
                                name="zip"
                                type='text'
                                placeholder="78750"
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                            />
                            <label for='zip' className='active'>Zip</label>
                        </div>
                    </div>
                    <div className="center-align">
                    <button className="btn waves-effect waves-light" onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}