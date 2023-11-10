const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
wolf_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("wolf",wolfSchema)
