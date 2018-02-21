"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
}, {
    timestamps: true
});
exports.default = mongoose.model('Room', schema);
//# sourceMappingURL=room.js.map