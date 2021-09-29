const { createPost } = require('./createPost')
const { deletePost } = require('./deletePost')
const { getPost } = require('./getPost')
const { getPostByName } = require('./getPostByName')
const { getPosts } = require('./getPosts')
const { updatePost } = require('./updatePost')

module.exports = {
  createPost,
  deletePost,
  getPost,
  getPostByName,
  getPosts,
  updatePost
}
