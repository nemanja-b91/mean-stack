const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')
const {roleAuthorization} = require('../controllers/auth')

// multer setup
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // function that specifies the destination folder where the file will be uploaded
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    // function that specifies how the file should be named
    cb(null, file.originalname);
  },
});
const upload = multer({storage}); // here we specify storage options



const {
  getPosts,
  getPost,
  getPostByName,
  deletePost,
  createPost,
  updatePost
} = require('../controllers/posts')

const {
  validateGetPost,
  validateDeletePost,
  validateCreatePost,
  validateUpdatePost
} = require('../controllers/posts/validators')


router.post('/uploadfile', upload.single('uploadedImage'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.status(200).send({
    statusCode: 200,
    status: 'success',
    uploadedFile: file
  })

}, (error, req, res, next) => {
  res.status(400).send({
    error: error.message
  })
})
/*
 * Get all items route
 */
router.get('/', getPosts)


/*
 * Get item by name route
 */
router.get(
  '/single/:id',
  trimRequest.all,
  validateGetPost,
  getPostByName
)

/*
 * Get item route
 */
router.get(
  '/:id',
  trimRequest.all,
  validateGetPost,
  getPost
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreatePost,
  createPost
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdatePost,
  updatePost
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeletePost,
  deletePost
)
module.exports = router
