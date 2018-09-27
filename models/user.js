const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 }, 
    userImage: { type: String, required: true },
    phone: { type: String, required: true },
    creditCard: { type: number, required: true },
    ccExpire: { type: Date, required: true },
    cardCcv: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;