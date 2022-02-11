const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    user_id: { type: String, required: true },
	article_id: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Collection", collectionSchema);