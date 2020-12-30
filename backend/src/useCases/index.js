import makeAddUser from './createUser.useCase'
import makeFindUser from './findUser.userCase'
import makeCheckStream from "./checkStream.useCase";
import makeCreateStream from "./createStream.useCase";
import makeCreateTranscriptStream from "./createTranscriptStream.useCase";
import {userData, streamData} from '../dataAccess'
import {twitchAuth, getStream} from '../libs/twitch'

const createUser = makeAddUser({userData, twitchAuth})
const findUser = makeFindUser({userData})
const checkStream = makeCheckStream({streamData, getStream})
const createStream = makeCreateStream({streamData})
const createTranscriptStream = makeCreateTranscriptStream({streamData})

const userService = {
    createUser,
    findUser,
    createStream,
    checkStream,
    createTranscriptStream
}


export default userService
export {createUser, findUser, checkStream, createStream, createTranscriptStream}