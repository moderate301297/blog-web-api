const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
	article_id: { type: String, required: true },
	comment: [{
		comment_id: { type: String, required: false },
		user: {
			user_id: { type: String, required: false },
			username: { type: String, required: false },
		},
		content: { type: String, required: false },
		reply: [
			{
				reply_id: { type: String, required: false },
				user: {
					user_id: { type: String, required: false },
					username: { type: String, required: false },
				},
				content: { type: String, required: false },
				created_at: { type: Date, required: false },
				updated_at: { type: Date, required: false }
			}
		],
		created_at: { type: Date, required: true },
		updated_at: { type: Date, required: true }
	}]
});

module.exports = mongoose.model("Comment", commentSchema);