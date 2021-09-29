const Post = require('../../models/post')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { getItemByName } = require('../../middleware/db')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getPostByName = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await getItemByName(req.id, Post))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getPostByName }
