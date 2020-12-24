const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let streamSchema = new Schema({
    owner: String,
    twitchId: String,
    offset: { type: Number, default: 0 },
    transcription: [{
        text: String,
        timeStamp: Number,
        created_at: { 'type': Date, 'default': Date.now() }
    }],
    updatedAt: { 'type': Date, 'default': Date.now() },
});

module.exports = mongoose.model('stream', streamSchema)