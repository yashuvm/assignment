const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let peopleSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },


}, { versionKey: false })

module.exports = mongoose.model('people', peopleSchema)