const stream = require('../models/stream')

async function createStreamDataBase(data) {
    let findExistingStream = await stream.findOne({twitchId : data.twitchId})
    if(findExistingStream) return findExistingStream

    let newStream = new stream(data)
    let saved = await newStream.save()
    return saved
}

/*
async function editStreamDataBase(data) {
    let doc = await user.findOneAndUpdate({ twitchId: data.twitchId }, { offset : data.offset }, )
    return doc
}*/

async function pushTranscripStream(data) {
    let updateStream = await stream.findOneAndUpdate(
        { twitchId: data.twitchId },
        {
            $push: {
                transcription: {
                    text: data.text,
                    timeStamp: data.timeStamp                    
                }
            }
        },
    );
    return updateStream
}

async function getTranscript(data){
    console.log(data)
    let getStream = await stream.findOne({twitchId: data}).exec()
    return getStream
}

module.exports = { getTranscript, createStreamDataBase,  pushTranscripStream }