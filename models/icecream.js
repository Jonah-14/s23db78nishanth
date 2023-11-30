const { Double } = require("mongodb")
const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    flavor: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("icecream", 
icecreamSchema)