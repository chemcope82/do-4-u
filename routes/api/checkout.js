
 const router = require("express").Router();
 const CheckoutForm = require("../CheckoutForm");

// Matches with "/api/books"
 router.route("/charge")
   .get(CheckoutForm.findAll)
   .post(CheckoutForm.create);

// Matches with "/api/books/:id"
 router
   .route("/CheckoutForm:id")
   .get(booksController.findById)
   .put(booksController.update)
  .delete(booksController.remove);

 module.exports = router;