const router = require("express").Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");


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
  

// Matches with /api/login
router.route("/")
    .post((req, res) => {
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if(!user){
                return res.status(401).send({success: false});
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if(err || !isMatch){
                        return res.status(401).send({success: false});
                    } else {
                        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                        return res.status(200).send({success: true, token: token});
                    }
                });
            }
        });
    });

    module.exports = router;