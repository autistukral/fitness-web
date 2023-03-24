const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rezervaceSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
    refreshToken: String
});

module.exports = mongoose.model('Rezervace', rezervaceSchema);