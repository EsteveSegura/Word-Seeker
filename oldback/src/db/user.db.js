const user = require('../models/user');

async function singUpUser(data) {
    let findUser = await user.findOne({ id: data._id }).exec()
    if (findUser) return { 'message': 'user already exists' }

    let saveUser = new user({
        display_name: data.display_name,
        name: data.name,
        id: data._id,
        email: data.email,
    })
    let savedUser = await saveUser.save()
    return savedUser

    
}

module.exports = { singUpUser }

