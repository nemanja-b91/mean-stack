const uuid = require('uuid')
const Post = require('../../../models/post')
const {buildErrObject} = require('../../../middleware/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = (
  {
    image = '',
    title = '',
    url = '',
    content = '',
    excerpt = '',
    createdBy = '',
    views = 0
  }) => {
  return new Promise((resolve, reject) => {
    const post = new Post({
      image,
      title,
      url,
      content,
      excerpt,
      createdBy,
      views
    })
    post.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }

      item = JSON.parse(JSON.stringify(item))

      resolve(item)
    })
  })
}

module.exports = {createItemInDb}
