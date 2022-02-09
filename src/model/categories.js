const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

module.exports = mongoose.model("Categories", categorySchema);