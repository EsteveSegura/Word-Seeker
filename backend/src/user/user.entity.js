export default function buildMakeUser({ sanitize }) {
    return function makeUser(userData) {
        if (!userData.displayName || userData.displayName.length < 5) throw new Error('fail1')
        if (!userData.name) throw new Error('fail2')
        if (!userData.id) throw new Error('fail3')
        if (!userData.email) throw new Error('fail4')
        if (!userData.streams) throw new Error('fail5')

        let sanitizedName = sanitize(userData.name).trim()

        return {
            userData
        }
    }
}


