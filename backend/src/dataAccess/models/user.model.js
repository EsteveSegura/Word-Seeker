const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: String,
    name: String,
    id: String,
    email: String,
    streams: []
});

module.exports = mongoose.model('user', userSchema);