const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rezervaceSchema = new Schema({
    jmeno: {
        type: String,
        required: true
    },
    prijmeni: {
        type: String,
        required: true
    },
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
        required: true
    },
    refreshToken: String
});

module.exports = mongoose.model('Rezervace', rezervaceSchema);