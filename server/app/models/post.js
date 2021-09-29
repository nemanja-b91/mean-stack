const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false
    },
    excerpt: {
      type: String,
      required: false
    },
    createdBy: {
      type: String,
      required: true
    },
    views: {
      type: Number,
      required: false
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PostSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Post', PostSchema)
