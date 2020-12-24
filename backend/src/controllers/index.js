import {createUser, findUser, checkStream, createStream} from '../useCases'
import makeCreateUser from './createUser.controller'
import makeFindUser from './findUser.controller'
import makeCheckStream from "./checkStream.controller";
import makeCreateStream from './createStream.controller';


const addUser = makeCreateUser({createUser})
const getUser = makeFindUser({findUser})
const getStream = makeCheckStream({checkStream})
const addStream = makeCreateStream({createStream})
const userController = {
    addUser,
    getUser,
    getStream,
    addStream
}

export default userController
export {addUser, getUser, getStream, addStream}