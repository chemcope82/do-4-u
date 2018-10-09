import React, {Component} from "react";
import CheckoutForm from './pages/Stripe/CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
import './components/CardInfo/cardInfo.css';



// //STRIPE  step 2b
export default class cardInfo extends Component {
    render() {
      return (
      // <div> 
        <div className="header">
        {/* added the logo, need to move it */}
        <nav className="transparent z-depth-0">
        <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/userlist" className=" white-text">My User Lists</a></li>
            
              <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
          </nav>
      
      
      
      
      
      {/* <p className="brand-logo white-text bold-15-text" id="slogan"> Do More. Work Less.</p> */}
      {/* {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}    
      
  {/* <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>              */}

         {/* <span></span>
        </div> */}
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
  
  