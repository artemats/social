import mongoose from 'mongoose'
// TODO: create object Author
const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: {
      type: String,
      default: '',
    },
    userPicturePath: String,
    // TODO: set userData to likes Map
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

export default Post
