const mongoose = require('mongoose');

const OS = new mongoose.Schema({
    name: String,
    downloads: { type: Number, default: 0 },
    detailed: { type: mongoose.Schema.Types.Mixed, default: {} }
});

module.exports = mongoose.model('Downloads', OS);