const dbUser = require('../db/user.db')
const axios = require('axios')
const stream = require('../models/stream')

async function getAuthData(req, res) {
    try {
        console.log(req.params.token)
        const authData = await axios.get('https://api.twitch.tv/kraken/user', {
            headers: {
                'Client-ID': process.env.CLIENT_ID,
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Authorization': `OAuth ${req.params.token}`
            },
        })

        req.session.twitchData = authData.data
        await dbUser.singUpUser(authData.data)
        res.json(authData.data)
    } catch (error) {
        console.log(error)
        res.status(401).json({ 'message': 'something went wrong' })
    }
}


function logout(req, res) {
    req.session.destroy()
    res.status(200).json({ 'message': 'logout!' })
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


module.exports = { getAuthData, dataStreamer, logout }

