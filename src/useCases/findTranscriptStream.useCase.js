import makeStream from '../stream'

export default function makeFindTranscriptStream({streamData}) {
    return async function FindTranscriptStream(streamObject) {
        const stream = makeStream(streamObject)
        return streamData.findTranscript(stream.streamData)
    }
}