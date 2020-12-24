import makeUser from '../user'

export default function makeFindUser({ userData }) {
    return async function findUser(user) {
        const find = await userData.findUserByName(user)
        //console.log(find)
        
        const userFound = makeUser(find)

        if (!userFound) throw new Error('user not exists')
        return userFound.userData
    }
}