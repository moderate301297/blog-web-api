const mongoose = require("mongoose");
// const uniqueEmail = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	status: { type: String, required: false },
	active: { type: Boolean, required: false },
	access_token: { type: String, required: false },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

// userSchema.plugin(uniqueEmail);

module.exports = mongoose.model("User", userSchema);