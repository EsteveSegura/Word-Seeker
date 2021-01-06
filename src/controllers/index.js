import {createUser, findUser, checkStream, createStream, createTranscriptStream, findTranscriptStream} from '../useCases'
import makeCreateUser from './createUser.controller'
import makeFindUser from './findUser.controller'
import makeCheckStream from "./checkStream.controller";
import makeCreateStream from './createStream.controller';
import makeCreateTranscriptStream from "./createTranscriptStream.controller";
import makeFindTranscriptStream from "./findTranscriptionStream.controller";


const addUser = makeCreateUser({createUser})
const getUser = makeFindUser({findUser})
const getStream = makeCheckStream({checkStream})
const addStream = makeCreateStream({createStream})
const addTranscript = makeCreateTranscriptStream({createTranscriptStream})
const findTranscript = makeFindTranscriptStream({findTranscriptStream})

const userController = {
    addUser,
    getUser,
    getStream,
    addStream,
    addTranscript,
    findTranscript
}

export default userController
export {addUser, getUser, getStream, addStream, addTranscript, findTranscript}