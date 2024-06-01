const mongoose = require('mongoose');


const feedBackSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    feedBackID: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isRead: {
        type: Boolean,
        default: false
    }
})

const FeedBack = mongoose.model('FeedBack', feedBackSchema);

module.exports = FeedBack;
