class ApiResponse {
    #successResponseData({msg, data}) {
        const result = {success: 1}
        
        if(msg) {
            result.message = msg
        }
        if(data) {
            result.data = data
        }

        return result
    }

    #errorResponseData({msg, data}) {
        const result = {success: 0}
        
        if(msg) {
            result.message = msg
        }

        if(data) {
            result.data = data
        }

        return result
    }

    success(res, msg) {

        return res.status(200).json(this.#successResponseData({msg}))
    }

    successWithData(res, msg, data) {
        
        return res.status(200).json(this.#successResponseData({msg, data}))
    }

    error(res, msg) {

        return res.status(500).json(this.#errorResponseData({msg}))
    }

    notFound(res, msg) {
        
        return res.status(404).json(this.#errorResponseData({msg}))
    }

    validationError(res, msg, data) {

        return res.status(400).json(this.#errorResponseData({msg, data}))
    }

    unauthorizedError(res, msg) {

        return res.status(401).json(this.#errorResponseData({msg}))
    }

    unprocessableEntityError(res, msg) {
        return res.status(422).json(this.#errorResponseData({msg}))
    }
}

module.exports = new ApiResponse