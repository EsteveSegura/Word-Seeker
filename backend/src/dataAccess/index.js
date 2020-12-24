import mongoose from 'mongoose'

import userDb from './user.db'
import streamDb from './stream.db'
import userModel from './models/user.model'
import streamModel from './models/stream.model';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/seekertest', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("OK"))
    .catch((err) => console.log(err))

const userData = userDb({ userModel })
const streamData = streamDb({ streamModel })

export { userData, streamData }