const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user");
const apiResponse = require("../config/response");

function VerifyToken(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader?.split(" ")[1];

  if (!token) return apiResponse.unauthorizedError(res, "authorizedError");

  jwt.verify(token, process.env.JWT_SECRET_KEY, function (error, data) {
    if (error)
      return apiResponse.error(res, 'Token expired')

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (error, data) {
      if (error) return apiResponse.error(res, "Token expired");

      const userId = data.userId;
      if (!userId) {
        return apiResponse.unauthorizedError(res, "authorizedError");
      }

      UserSchema.findOne({ _id: userId }).exec((error, user) => {
        if (error) {
          return apiResponse.error(
            res,
            "an error occurred when retrieving user to authorization"
          );
        }

        if (!user) {
          return apiResponse.unprocessableEntityError(res, "unable to find user");
        }

        req.user = user;
        return next();
      });
    })
  });
}

module.exports = VerifyToken;
