const { itemNotFound } = require('../../middleware/utils')

/**
 * Gets item from database by id
 * @param {string} slug - item id
 */
const getItemByName = (slug = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.find({url: slug}, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getItemByName }
