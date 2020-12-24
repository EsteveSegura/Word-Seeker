require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const session = require('express-session')

mongoose.connect(process.env.DATABASE_URI || 'mongodb://localhost/seeker', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('database [OK]'))
    .catch((err) => console.log('database [FAIL]'))

const app = express();

const twitchUserRoutes = require('./routes/user');
const streamRoutes = require('./routes/streams');

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(session({
    secret: 'thatsnotsure',
    resave: true,
    saveUninitialized: false,
    cookie: { httpOnly: false, secure: false, maxAge: (3600000 * 24) * 30 }
}))

//app.set('trust proxy',1)
app.use('/'/*/api/user*/, twitchUserRoutes)
app.use('/streams/', streamRoutes)

app.listen(3001, () => {
    console.log('server [OK]')
})