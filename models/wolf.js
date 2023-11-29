const mongoose = require("mongoose")
const wolfSchema = mongoose.Schema({
wolf_color: String,
wolf_breed: String,
wolf_price: {type :Number,
    min:5,
    max:5000

}

});
module.exports = mongoose.model("wolf",wolfSchema)
