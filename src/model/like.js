const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    user_id: { type: String, required: true },
	article_id: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Like", likeSchema);