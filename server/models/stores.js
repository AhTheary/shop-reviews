"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var storeSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    desc: {
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    // review: {
    // }
    // ,
    countReview: {
        type: Number,
    }
}, {
    timestamps: true
});

var Stores = mongoose.model('Stores', storeSchema);
module.exports = Stores;