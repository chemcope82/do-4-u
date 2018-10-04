import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./form.css";

// ********  Keep all uncommented comments in  ****
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault;
    // User clicked submit
    alert('Payment Succesful');
    console.log("this.props.stripe");
    console.log(this.props.stripe);
    // let {token} = tok_visa  // try this instead of other stuff
    let {token} = await this.props.stripe.createToken({name: "John"});
    console.log("submit hit");
    console.log(token);
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
        // body: "token"
  });
  console.log("response");
  console.log(response);
      if (response.ok) console.log("Purchase Complete!");
    if (response.ok) this.setState({complete: true});
  }


  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
  
      <div className="container paymentContainer">
        <p>Payment total Amount</p>
        <input placeholder="$ Total"/>
        <input placeholder="Payment to" />
        <input placeholder="Account Number"/>
        <input placeholder="Routing Number"/>
         <CardElement />  
         <a style={{marginTop: 20+ "px"}} onClick={this.submit} className="waves-effect waves-light btn">Submit</a>
        
        {/* <button style={{backgroundColor: 'aqua'}} onClick>Submit</button> */}
      </div>
    
    );
  }
}

// KEEP :  Old export, keep it in the comments in case it is needed later on 
 export default injectStripe(CheckoutForm);
// Keep line export in case it is needed ***************************
        
// export default CheckoutForm;


