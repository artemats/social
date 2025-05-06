import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
    firstName: String,
    lastName: String,
    picturePath: String,
    description: String,
  },
  { timestamps: true }
)

const LikeSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
    firstName: String,
    lastName: String,
    picturePath: String,
  },
  { timestamps: true }
)

const PostSchema = new mongoose.Schema(
  {
    description: String,
    picturePath: {
      type: String,
      default: '',
    },
    likes: [LikeSchema],
    comments: [CommentSchema],
    author: {
      id: {
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
      email: {
        type: String,
        required: true,
      },
      picturePath: String,
      location: String,
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema)

export default Post
