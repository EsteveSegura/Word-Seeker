import makeUser from '../user'

export default function makeAddUser({ userData, twitchAuth }) {
    return async function addUser(token) {
        const auth = await twitchAuth(token)
        const user = makeUser({
            displayName: auth.display_name,
            name: auth.name,
            logo: auth.logo,
            email: auth.email,
            id: auth._id,
            streams: [],
        })

        const exists = await userData.findUser(user.userData)
        if (exists) return user.userData
        return userData.addUser(user)
    }
}