const Stores = require("../models/stores");

const findById = async(id) => {
    return await Stores.findById(id);
}

const findAll = async() => {
    try {
        return await Stores.find().populate('category');
    } catch (error) {
        return ërror
    }
}

const create = async(newStore) => {
    const createStore = await Stores.create(newStore);
    return {
        success: true,
        message: "Ok store is Created",
        data: createStore
    };
}

const update = async(updateStore) => {

    const { _id, storeName, ownerName, location, imageUrl, desc } = updateStore;
    const updatenewStore = await Stores.findByIdAndUpdate(_id, {
        storeName: storeName,
        ownerName: ownerName,
        location: location,
        desc: desc,
        imageUrl: imageUrl
    });
    return {
        success: true,
        message: "Now Store is updated",
        data: updatenewStore
    };

}

const remove = async(id) => {
    const removeStore = await Stores.findByIdAndRemove(id);
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