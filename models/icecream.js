const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
flavor: String,
type: String,
rating: Number
})
module.exports = mongoose.model("icecream",
icecreamSchema)