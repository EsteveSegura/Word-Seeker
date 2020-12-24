import makeStream from '../stream'

export default function makeCreateStream({streamData}) {
    return async function createStream(streamObject) {
        console.log(streamObject)
        const stream = makeStream(streamObject)

        return streamData.addStream(stream.streamData)
    }
}