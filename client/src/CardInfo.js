import React, {Component} from "react";
import CheckoutForm from './pages/Stripe1/CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import './components/CardInfo/cardInfo.css';



// //STRIPE  step 2b
export default class cardInfo extends Component {
    render() {
      return (
      <div> 
        <div className="header">
         <span></span>
        </div>
        <StripeProvider apiKey="pk_test_v42iJgfSGCpsjz35L7MOLcpv">
          <div className="example">
            <Elements>
              <CheckoutForm /> 
            </Elements>
          </div>
        </StripeProvider>
      </div>
      );
    }
  }
  
  