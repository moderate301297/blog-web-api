const mongoose = require("mongoose");
const uniqueEmail = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.plugin(uniqueEmail);

module.exports = mongoose.model("User", userSchema);