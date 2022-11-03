const apiResponse = require('../config/response')
const UserSchema = require('../models/user')


exports.get = (req, res) => {
    const username = req.params.username

    UserSchema
        .find({ username }, { password: 0 })
        .exec((error, user) => {
            if (error)
                return apiResponse.error(res, error)
            return user.length !== 0 ? apiResponse.successWithData(res, '', user) : apiResponse.error(res, 'Cannot find the given user')
        })
}



const findWithCallback = (_id, res, callback) => {
    UserSchema.findOne({ _id }).exec((error, user) => {
        if (error)
            return apiResponse.error(res, "Error when finding user")

        if (!user)
            return apiResponse.validationError(res, "Error when finding user")

        callback(user)
    })
}

const getUserPublicInformation = async (_id) => {

    const user = await UserSchema.findOne({ _id }, { _id: 1, username: 1, fullname: 1, avatar: 1 }).exec()
    return user
}

exports.getUserPublicInformation = getUserPublicInformation
exports.findWithCallback = findWithCallback