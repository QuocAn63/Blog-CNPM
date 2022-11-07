const { body, validationResult } = require("express-validator");
const PostSchema = require("../models/post");
const apiResponse = require("../config/response");
const UserSchema = require("../models/user");
const slugify = require("slugify");

exports.save = [
    body("title")
      .isLength({ min: 20 })
      .trim()
      .withMessage("Tiêu đề tối thiểu 20 ký tự"),
    body("content")
      .isLength({ min: 100 })
      .trim()
      .withMessage("Nội dung quá ngắn"),
    (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return apiResponse.validationError(res, errors);
      }
  
      UserSchema.findOne({ username: req.user.username }).exec(
        (error, user) => {
          if (error)
            return apiResponse.error(
              res,
              "Error while finding user to create post"
            );
          if (user) {
            let UserId = user._id.toString();
  
            const PostData = new PostSchema({
              title: req.body.title,
              content: req.body.content,
              slug: slugify(req.body.title, {
                replacement: "-",
                lower: true,
                locale: "vi",
              }),
              user: UserId,
            });
  
            PostData.save((error, value) => {
              if (error) return apiResponse.error(res, error);
              return apiResponse.success(res, "Post created");
            });
          } else {
            return apiResponse.error(
              res,
              "Unable to find user with the given username"
            );
          }
        }
      );
    }
  ]