require('dotenv').config()
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const helmet = require('helmet');

import makeCallback from './expressCallback'
import { addUser, getUser, getStream, addStream, addTranscript, findTranscript } from './controllers'


const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors({
    origin: process.env.FRONT_URI || 'http://localhost:8080',
    credentials: true,
    exposedHeaders: ['set-cookie']
}));
app.use(session({
    secret: process.env.SESSION_KEY || 'somethingSuperSecret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: process.env.COOKIE_MAX_AGE || 1000 * 60 * 4 }
}));

app.use('/', express.static(__dirname + '/public'));

app.post(`/streamdata/:token`, makeCallback(addUser))
app.get(`/user/:streamer`, makeCallback(getUser))
app.get('/streamdata/stream/:name', makeCallback(getStream))
app.post('/streams/create', makeCallback(addStream))
app.post('/streams/pushtranscript', makeCallback(addTranscript))
app.get('/streams/getstream/:idStream', makeCallback(findTranscript))

app.listen(3001, () => {
    console.log('Server is listening on port 3001')
})

export default app