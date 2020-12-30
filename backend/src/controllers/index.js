import {createUser, findUser, checkStream, createStream, createTranscriptStream} from '../useCases'
import makeCreateUser from './createUser.controller'
import makeFindUser from './findUser.controller'
import makeCheckStream from "./checkStream.controller";
import makeCreateStream from './createStream.controller';
import makeCreateTranscriptStream from "./createTranscriptStream.controller";


const addUser = makeCreateUser({createUser})
const getUser = makeFindUser({findUser})
const getStream = makeCheckStream({checkStream})
const addStream = makeCreateStream({createStream})
const addTranscript = makeCreateTranscriptStream({createTranscriptStream})

const userController = {
    addUser,
    getUser,
    getStream,
    addStream,
    addTranscript
}

export default userController
export {addUser, getUser, getStream, addStream, addTranscript}