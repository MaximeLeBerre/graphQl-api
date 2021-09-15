const mongoose = require('mongoose');

const Schema = mongoose.Schema
const Wilder = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: String,
    lastname: String,
    age: Number,
})
module.exports = mongoose.model('wilder', Wilder);