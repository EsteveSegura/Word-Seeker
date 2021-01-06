import makeStream from '../stream'

export default function makeCreateStream({streamData}) {
    return async function createStream(streamObject) {
        const stream = makeStream(streamObject)
        console.log(stream)

        return streamData.addStream(stream.streamData)
    }
}