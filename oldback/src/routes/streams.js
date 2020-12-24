const express = require('express');
const router = express.Router();
const streamController = require('../controllers/stream.controller');

router.post('/create',  async (req, res) => await streamController.createStream(req, res))
router.post('/pushtranscript', async (req, res) => await streamController.pushTranscript(req, res))
router.get('/getstream/:idTwitch',async(req,res) => await streamController.getStream(req,res))

module.exports = router