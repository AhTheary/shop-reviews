"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    commentUserId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
});

var Comments = mongoose.model('Reviews', commentsSchema);
module.exports = Comments;