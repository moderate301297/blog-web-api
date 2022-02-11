const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    cover: { type: Array, require: true },
    content: { type: String, required: true },
    categoryId: { type: String, required: true },
    categoryName: { type: String, required: true },
    likeCount: { type: Number, required: true },
    commentCount: { type: Number, required: true },
    collectCount: { type: Number, required: true },
    viewCount: { type: Number, required: true },
    user: {
        _id: { type: String, required: true },
        username: { type: String, required: true }
    },
    tagList: [
        {
            _id: { type: String, required: true },
            name: { type: String, required: true }
        }
    ],
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Article", articleSchema);