const express = require('express')
const router = express.Router()
const auth = require('../middleware/login');
const controllerUser = require('../controllers/users.controller');


router.get('/', (req, res) => res.json({ message: "ok" }))
router.get('/login', (req, res) => res.redirect(`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token&scope=user_read&force_verify=true`))
router.get('/streamdata/:token', async (req, res) => await controllerUser.getAuthData(req, res))
router.get('/me', auth.checkLogin, (req, res) => req.session.twitchData ? res.json(req.session.twitchData) : res.json({ value: 'null' }))
router.get('/streamdata/stream/:name', auth.checkLogin, async (req, res) => await controllerUser.dataStreamer(req, res))
router.get('/logout', auth.checkLogin, async (req, res) => controllerUser.logout(req,res))

module.exports = router