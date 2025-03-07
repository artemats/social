import User from '../models/User.js'
import Post from '../models/Post.js'

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body
    const user = await User.findById(userId)
    const newPost = await new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      userPicturePath: user.picturePath,
      description,
      picturePath,
    })

    await newPost.save()

    const post = await Post.findById(newPost._id)

    res.status(201).json(post)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find()

    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params
    const posts = await Post.find({ userId })

    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const likePost = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    const post = await Post.findById(id).exec()
    const isLiked = post.likes.get(userId)

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      isLiked
        ? { $unset: { [`likes.${userId}`]: '' } }
        : { $set: { [`likes.${userId}`]: true } },
      { new: true }
    )

    res.status(200).json(updatedPost)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
