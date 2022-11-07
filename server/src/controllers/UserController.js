const apiResponse = require('../config/response')
const user = require('../models/user')
const UserSchema = require('../models/user')
const UserDetailSchema = require('../models/userDetail')
const { getUserInformation } = require('./pipeline/user.pipeline')

exports.get = (req, res) => {
    const username = req.params.username

    const pipeline = getUserInformation(username)

      UserSchema.aggregate(pipeline).exec((error, user) => {
        if (error) return apiResponse.error(res, error);

        if (user.length > 0)
        return apiResponse.successWithData(res, "", user);
        return apiResponse.notFound(res, "Not found")
    })
}


exports.update = (req, res) => {
    const isAuthenticated = req.user.username === req.body.username
    if (isAuthenticated) {
        let errorMessage = {
            validateError: [],
            serverError: []
        }
        let id = req.user._id;          
        let updateData = (({ owner, ...passData }) => passData)(req.body)

        UserDetailSchema.findOne({ email: updateData.email }).exec((error, userDetail) => {
            if (error)
                errorMessage.serverError.push(error)
        })

        UserDetailSchema.findOne({ dateOfBirth: updateData.dateOfBirth }).exec((error, userDetail) => {
            if (error)
                errorMessage.serverError.push(error)
        })

        UserDetailSchema.findOne({ gender: updateData.gender }).exec((error, userDetail) => {
            if (error)
                errorMessage.serverError.push(error)
        })

        if (errorMessage.validateError.length !== 0 || errorMessage.serverError.length !== 0) {
            return apiResponse.validationError(res, 'An error occurred while validating', errorMessage)
        }

        let updateQuery = {
            $set: updateData
        }

        UserDetailSchema.updateOne({ userId: id}, updateQuery, (error, value) => {
            if (error)
                return apiResponse.error(res, 'Update failed', error)
            console.log(value)
            return apiResponse.success(res, 'Updated successfully')
        })
    } else {
        return apiResponse.unauthorizedError(res, 'You don\'t have permission to update information of another user')
    }
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

    const user = await UserSchema.findOne({ _id }, { _id: 1, username: 1, avatar: 1 }).exec()
    return user
}

exports.getUserPublicInformation = getUserPublicInformation
exports.findWithCallback = findWithCallback