export default function buildMakeStream() {
    return function makeStream(streamData) {
        if (!streamData.owner) throw new Error('fail1')
        if (!streamData.twitchId) throw new Error('fail2')
        if (typeof streamData.offset !== "number" ) throw new Error('fail3')
        if (!streamData.transcription) streamData.transcription = []

        return {
            streamData
        }
    }
}