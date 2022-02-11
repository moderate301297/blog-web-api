const mongoose = require("mongoose");

const permissionSchema = mongoose.Schema({
    roles: { type: Array, required: true },
	permission: { type: Array, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true }
});

module.exports = mongoose.model("Permission", permissionSchema);