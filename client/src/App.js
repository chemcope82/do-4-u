import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Runner from "./pages/Runner";
import Signup from "./pages/Signup";
import User from "./pages/User";
import UserList from "./pages/UserLists";


// //STRIPE  step 2b
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';

// class App extends Component {
//   render() {
//     return (
//       <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
//         <div className="example">
//           <h1>React Stripe Elements Example</h1>
//           <Elements>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </StripeProvider>
//     );
//   }
// }


const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/runner" component={Runner} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/userlist" component={UserList} />
      
        </Switch>
      </div>
    </Router>

//Stripe js link
    // <script src="https://js.stripe.com/v3/"></script>
  );
}
export default App;
