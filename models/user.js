const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: ,
    lastName: ,
    userName: ,
    email: ,
    password: ,
    userImage: ,
    phone: ,
    creditCard: ,
    ccExpire: ,
    cardCcv: ,
});

const User = mongoose.model("User", userSchema);

module.exports = User;