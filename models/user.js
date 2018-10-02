const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: String,
    password: String





    // firstName: { type: String, required: "First name is required" },
    // lastName: { type: String, required: "Last name is required" },
    // userName: { 
    //     type: String, 
    //     required: "Username is required", 
    //     unique: true,
    //     minlength: 8 
    // },
    // email: { 
    //     type: String, 
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    //     required: true 
    // },
    // password: { type: String, required: true, minlength: 8 }, 
    // userImage: { type: String, required: true },
    // //Request users to input phone numbers as 10-digit formatted as xxx-xxx-xxxx
    // phone: { 
    //     type: String, 
    //     required: true,
    //     match: [/\d{3}-\d{3}-\d{4}/, "Please enter a 10-digit phone number of the format xxx-xxx-xxxx"] 
    // }, 
    // //Request users to input credit cards as 16-digits with no spaces or separators
    // creditCard: { 
    //     type: String, 
    //     required: true,
    //     validate: [
    //         function(input) {
    //             return input.length === 16;
    //         },
    //         "Please enter a 16-digit credit card number with no spaces or separators."
    //     ]
    // },
    // ccExpire: { type: Date, required: true },
    // cardCcv: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;