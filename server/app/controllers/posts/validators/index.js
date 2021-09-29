const { validateCreatePost } = require('./validateCreatePost')
const { validateDeletePost } = require('./validateDeletePost')
const { validateGetPost } = require('./validateGetPost')
const { validateUpdatePost } = require('./validateUpdatePost')

module.exports = {
  validateCreatePost,
  validateDeletePost,
  validateGetPost,
  validateUpdatePost
}
