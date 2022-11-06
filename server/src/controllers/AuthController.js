const { body, validationResult, sanitizeBody } = require("express-validator");
const UserSchema = require("../models/user");
const UserDetailSchema = require("../models/userDetail");
const MetaDataSchema = require("../models/userMeta");
const apiResponse = require("../config/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register

exports.register = [
  body("fullname")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Fullname must be specified")
    .isAlphanumeric('vi-VN', { ignore: ' ' })
    .withMessage("Name must not contains number"),
  body("email")
    .isLength({ min: 1 })
    .trim()
    .withMessage("Email must be specified")
    .isEmail()
    .withMessage("Invalid email address")
    .custom((value) => {
      return UserDetailSchema.findOne({ email: value }).then((user) => {
        if (user) return Promise.reject("Email already in use");
      });
    }),
  body("password")
    .isLength({ min: 6 })
    .trim()
    .withMessage("Password must be 6 characters or greater"),
  body("username")
    .isLength({ min: 6 })
    .trim()
    .withMessage("User name must be specified")
    .custom((value) => {
      return UserSchema.findOne({ username: value }).then((user) => {
        if (user) return Promise.reject("User name already in use");
      });
    }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return apiResponse.validationError(
        res,
        "Validation error",
        errors.array()
      );
    }


    bcrypt.hash(req.body.password, 10, function (error, hash) {
      
      const NewUser = new UserSchema({
        username: req.body.username,
        password: hash,
      });

      const NewUserDetail = new UserDetailSchema({
        userId: NewUser,
        fullname: req.body.fullname,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
      });

      const MetaData = new MetaDataSchema({
        userId: NewUser,
      });
      
      MetaData.save((error) => {
        if (error) { return apiResponse.error(res, error); } 
        else 
        {
            NewUser.save((error) => {
              if (error) { return apiResponse.error(res, error); } 
              else 
              {
                NewUserDetail.save((error) => {
                  if (error) { return apiResponse.error(res, error); } 
                  else 
                  {
                    const UserDetailData = {
                      _id: NewUser._id,
                      fullname: NewUserDetail.fullname,
                      email: NewUserDetail.email,
                      dateOfBirth: NewUserDetail.dateOfBirth,
                    };
          
                    return apiResponse.successWithData(
                      res,
                      "Registration Successful",
                      UserDetailData
                    ); 
                  }
                });
              }

            });
        }
      });
    });
  },
]

//Login

exports.login = [
  body("username")
    .isLength({ min: 1 })
    .trim()
    .withMessage("User name must be specified"),
  body("password")
    .isLength({ min: 6 })
    .trim()
    .withMessage("Password must be specified"),
  (req, res) => {
    UserSchema.findOne({ username: req.body.username })
      .then((user) => {
        if (user) {
          bcrypt.compare(
            req.body.password,
            user.password,
            function (error, result) {
              console.log(user)
              if (result) {
                const UserData = { userId: user._id, username: user.username, fullname: user.fullname, email: user.email, avatar: user.avatar }
                const jwtSecretKey = process.env.JWT_SECRET_KEY;

                UserData.token = jwt.sign(
                  { userId: UserData.userId, username: UserData.username },
                  jwtSecretKey,
                  {
                    expiresIn: "7 days",
                  }
                );

                return apiResponse.successWithData(
                  res,
                  "Login successfully",
                  UserData
                );
              } else {
                return apiResponse.unauthorizedError(
                  res,
                  "Wrong Username or Password"
                );
              }
            }
          );
        } else {
          return apiResponse.unauthorizedError(
            res,
            "Wrong Username or Password"
          );
        }
      })
      .catch((error) => {
        return apiResponse.error(res, error);
      });
  },

]
