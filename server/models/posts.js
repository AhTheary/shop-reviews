"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postsSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    }
}, {
    timestamps: true,
});



var Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;