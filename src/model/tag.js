const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    name: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Tag", tagSchema);