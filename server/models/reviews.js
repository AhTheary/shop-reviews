"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reviewsSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    storeId: {
        type: Schema.Types.ObjectId,
        ref: 'Stores',
        required: true
    },
    star: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: true,
});

var Reviews = mongoose.model('Reviews', reviewsSchema);
module.exports = Reviews;