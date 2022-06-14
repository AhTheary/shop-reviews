const Reviews = require("../models/reviews");

const findById = async(id) => {
    return await Stores.findById(id);
}

const findAll = async(req, res) => {
    try {
        return await Reviews.find().populate('category');
    } catch (error) {
        return ërror
    }

}

const create = async(newStore) => {
    const createStore = await Reviews.create(newStore);
    return {
        success: true,
        message: "Ok store is Created",
        data: createStore
    };
}

const update = async(updateReview) => {

    const { _id, star, comment } = updateReview;
    const updatenewReviews = await Reviews.findByIdAndUpdate(_id, {
        star: star,
        comment: comment
    });
    return {
        success: true,
        message: "Now Store is updated",
        data: updatenewReviews
    };

}

const remove = async(id) => {
    const removeStore = await Reviews.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        message: "Store is delete successfull",
        data: removeStore
    };
}

module.exports = {
    findById,
    update,
    remove,
    findAll,
    create,
}