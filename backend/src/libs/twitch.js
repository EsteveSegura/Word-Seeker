require('dotenv').config()
import axios from 'axios'

async function twitchAuth(token) {
    const auth = await axios.get('https://api.twitch.tv/kraken/user', {
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': `OAuth ${token}`
        },
    })

    return auth.data
}


async function getBearer() {
    let getBearer = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`)
    return getBearer.data.access_token
}

async function streamerVideoId(userTwitch) {
    try {
        let headers = {
            'headers': {
                'Authorization': `Bearer ${await getBearer()}`,
                'Client-ID': process.env.CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        }
        let getId = await axios.get(`https://api.twitch.tv/kraken/users/?login=${userTwitch}`, headers)
        let getVodId = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${getId.data.users[0]._id}`, headers)

        return getVodId.data.data[0].id;
    } catch (error) {
        return error
    }
}

async function getStream(name) {
    try {
        let headers = {
            'headers': {
                'Authorization': `Bearer ${await getBearer()}`,
                'Client-ID': process.env.CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        }
        let getId = await axios.get(`https://api.twitch.tv/kraken/users/?login=${name}`, headers)
        let streamerData = await axios.get(`https://api.twitch.tv/kraken/streams/${getId.data.users[0]._id}`, headers)
        if(streamerData.data.stream ) streamerData.data.stream.videoId = await streamerVideoId(name)
        
        return streamerData.data
    } catch (error) {
        console.log(error)
        return false
    }
}

export { twitchAuth, getStream }