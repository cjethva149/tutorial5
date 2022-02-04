var mongoose = require('mongoose');

var supply = mongoose.Schema({
    name:String,
    password:Number
})

module.exports = mongoose.model("supply",supply)