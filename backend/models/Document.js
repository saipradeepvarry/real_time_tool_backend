const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, index: true },
    content: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    version: { type: Number, default: 1 },
    isDeleted: { type: Boolean, default: false }, // Soft delete flag
}, { timestamps: true }); // Auto-manages createdAt and updatedAt fields

module.exports = mongoose.model('Document', documentSchema);
