const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    name : String,
    email : String,
    contact : Number,
    message : String
})

module.exports = mongoose.model("customer",customerSchema)