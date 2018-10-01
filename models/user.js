const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
    firstName: { type: String, required: "First name is required" },
    lastName: { type: String, required: "Last name is required" },
    email: { 
        type: String, 
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: true 
    },
    password: { type: String, required: true, minlength: 8 }, 
    userImage: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    //Request users to input phone numbers as 10-digit formatted as xxx-xxx-xxxx
    phone: { 
        type: String, 
        required: true,
        match: [/\d{3}-\d{3}-\d{4}/, "Please enter a 10-digit phone number of the format xxx-xxx-xxxx"] 
    }, 
    //Request users to input credit cards as 16-digits with no spaces or separators
    creditCard: { 
        type: String, 
        required: true,
        validate: [
            function(input) {
                return input.length === 16;
            },
            "Please enter a 16-digit credit card number with no spaces or separators."
        ]
    },
    ccExpire: { type: Date, required: true },
    cardCcv: { type: Number, required: true }
});

userSchema.pre("save", function(next){
    if(this.isModified("password") || this.isNew){
        bcrypt.hash(this.password, null, null, (err, hash) => {
            if(err){
                console.log(err);
                return next(err);
            }
            this.password = hash;
            return(next);
        });
    }
});

userSchema.methods.comparePassword = function(pass, cb){
    bcrypt.compare(pass, this.password, function(err, isMatch){
        if(err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
}

const User = mongoose.model("User", userSchema);

module.exports = User;