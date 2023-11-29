const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
wolf_color: String,
wolf_breed: {type:String,length:15},
wolf_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("wolf",wolfSchema)