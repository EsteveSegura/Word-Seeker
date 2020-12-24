const dbStream = require('../db/stream.db');
const twitchLib = require('../libs/twitch.js')

async function createStream(req, res) {
    let videoId = await twitchLib.streamerVideoId(req.body.owner)
    if (!videoId) return res.status(403).json({ 'error': 'something wrong' })

    req.body.twitchId = videoId

    let create = await dbStream.createStreamDataBase(req.body)
    if (!create) return res.status(403).json({ 'error': 'something wrong' })

    return res.status(200).json({ create })
}

async function pushTranscript(req, res) {
    try {
        let pushTranscript = dbStream.pushTranscripStream(req.body)
        if (!pushTranscript) return res.status(403).json({ 'error': 'something wrong' })
        return res.status(200).json(pushTranscript)
    } catch (error) {
        return res.status(400).json(error)
    }
}

async function getStream(req, res) {
    let transcriptDb = await dbStream.getTranscript(req.params.idTwitch)
    return res.status(200).json(transcriptDb)
}

module.exports = { createStream, pushTranscript, getStream }