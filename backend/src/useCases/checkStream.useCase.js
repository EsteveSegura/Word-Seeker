import makeStream from '../stream'

export default function makeCheckStream({streamData, getStream}) {
    return async function checkStream(name) {
        const dataStream = await getStream(name)
        const stream = makeStream({
            owner: dataStream.stream.channel.name,
            twitchId: dataStream.stream._id,
            offset: 0,
            transcription: [],
        })

        return dataStream
    }
}

/*

async function dataStreamer(req, res) {
    try {
        let headers = {
            'headers': {
                'Authorization': `Bearer ${await getBearer()}`,
                'Client-ID': process.env.CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        }
        let getId = await axios.get(`https://api.twitch.tv/kraken/users/?login=${req.params.name}`, headers)
        let streamerData = await axios.get(`https://api.twitch.tv/kraken/streams/${getId.data.users[0]._id}`, headers)
        if(streamerData.data.stream ) streamerData.data.stream.videoId = await streamerVideoId(req.params.name)
        
        res.json(streamerData.data)
    } catch (error) {
        console.log(error)
        return false
    }
}

*/