const Users = require("../models/users");
const { id } = require("../schemas/signUp");

const findById = async(id) => {
    try {
        const user = await Users.findById(id);
        return user;
    } catch (err) {
        return "User is not found"
    }
}

const findAll = async() => {
    return await Users.find();
}

const updatePass = async() => {
    // to do
}

const update = async() => {
    // to do
}

const remove = async(id) => {
    const removeUser = await Users.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        message: "Users is delete successfull",
        data: removeUser,
    };
}

module.exports = {
    findById,
    updatePass,
    update,
    remove,
    findAll
}