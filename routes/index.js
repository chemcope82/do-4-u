const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// API Routes
router.use("/api", apiRoutes);

router.route("/charge").post(async (req, res) => {
  
  // keep this only if we plan on pushing the cards charge and bringing it to a bank **
  try {
        let {status} = await stripe.charges.create({
          amount: req.body.amount,
          currency: "usd",
          description: "An example charge",
          source: req.body
        });
        conole.log("try is hitting");
        // the submit button is hitting. However, the try function is not working and logging an error... the error is stating the token is not found.  It may be because the credit card number being used is the example one : 4242 4242 4242 4242, with 01/19 cvn=123 zip=12345 
        res.json({status});
      } catch (err) {
        console.log("error");
        console.log(err);
        res.status(500).end();
      }
  
  
  
  console.log("/charge on back end");
  console.log("req.body__________");
  console.log(req.body);
  console.log("/req.body__________");
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;




