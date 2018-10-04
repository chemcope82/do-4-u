const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("../../models/user");

// const passportOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.JWT_SECRET
// }

// passport.use(new JwtStrategy(
//     passportOptions,
//     (jwt_payload, done) => {
//       User.findOne({ _id: jwt_payload._id }, (err, user) => {
//         if(user){
//           done(null, user);
//         } else {
//           done(null, false);
//         }
//       });
//     }
// ));


// Matches with /api/user
router.route("/")
  .post(userController.create)
  .get(userController.findAll);

  // Matches with /api/user/:id
  router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;

// passport.authenticate("jwt", {session: false}),