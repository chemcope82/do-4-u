const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

=======
const app = express();
const PORT = process.env.PORT || 3001;
>>>>>>> master

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("body-parser").text());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/do4u_db");

//Stripe step 4
// app.post("/charge", async (req, res) => {
//   try {
//     let {status} = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     });

//     res.json({status});
//   } catch (err) {
//     res.status(500).end();
//   }
// });



 app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
 });

