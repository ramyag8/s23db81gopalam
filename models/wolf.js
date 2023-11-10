const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
wolf_color: String,
wolf_breed: String,
wolf_price: Number
})
module.exports = mongoose.model("wolf",wolfSchema)
