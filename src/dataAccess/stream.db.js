export default function streamDb({ streamModel }) {
    async function addStream(stream) {
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
    async function findTranscript(twitchId) {
        let getStream = await streamModel.findOne({ twitchId: twitchId })
        console.log(getStream.offset)
        return getStream
    }
    return Object.freeze({
        addStream,
        addTranscript,
        findTranscript,
    })
}