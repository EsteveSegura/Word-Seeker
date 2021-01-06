import makeStream from '../stream'

export default function makeCreateTranscriptStream({streamData}) {
    return async function createTranscriptStream(streamObject) {
        const stream = makeStream(streamObject)
        return streamData.addTranscript(stream.streamData)
    }
}