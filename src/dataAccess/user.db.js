export default function userDb({ userModel }) {
    async function addUser(user) {
        const addNewUser = new userModel(user.userData)
        const saveNewUser = await addNewUser.save()

        return saveNewUser
    }

    async function findUser(user) {
        const findUser = await userModel.findOne({ email: user.email })
        if (!findUser) return false

        return true
    }

    async function findUserByName(user) {
        const findUser = await userModel.findOne({ name: user })
        if (!findUser) throw Error("No user found")

        return findUser
    }

    return Object.freeze({
        addUser,
        findUser,
        findUserByName
    })
}