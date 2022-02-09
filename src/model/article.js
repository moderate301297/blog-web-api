const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    recomment: { type: String, required: true },
    like: { type: Number, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Article", articleSchema);