import React, {Component} from "react";
import CheckoutForm from './CheckoutForm'
import {Elements, StripeProvider} from 'react-stripe-elements';


// //STRIPE  step 2b
export default class cardInfo extends Component {
    render() {
      return (
        <StripeProvider apiKey="pk_test_v42iJgfSGCpsjz35L7MOLcpv">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      );
    }
  }
  
  