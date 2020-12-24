const axios = require('axios')

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

module.exports = { streamerVideoId }