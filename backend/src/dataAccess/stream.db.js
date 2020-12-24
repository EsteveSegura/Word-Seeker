export default function streamDb({ streamModel }) {
    async function addStream(stream) {
        console.log(stream)
        let findExistingStream = await streamModel.findOne({ twitchId: stream.twitchId })
        if (findExistingStream) return findExistingStream
        let newStream = new streamModel(stream)
        let saved = await newStream.save()
        return saved
    }
    async function addTranscript(transcript) {
        let updateStream = await streamModel.findOneAndUpdate({ twitchId: transcript.twitchId },
            {
                $push: {
                    transcription: {
                        text: transcript.text,
                        timeStamp: transcript.timeStamp
                    }
                }
            },
        );
        return updateStream
    }
    async function findTranscript(stream) {
        let getStream = await stream.findOne({ twitchId: stream.twitchId }).exec()
        return getStream
    }
    return Object.freeze({
        addStream,
        addTranscript,
        findTranscript,
    })
}