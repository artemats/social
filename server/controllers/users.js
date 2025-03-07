import User from '../models/User.js'

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id).exec()

    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    // TODO: try to use allSettled()
    const friends = await Promise.all(
      user.friends.map((id) =>
        User.findById(id, '_id firstName lastName').exec()
      )
    )

    res.status(200).json(friends)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params
    const user = await User.findById(id).exec()
    const friend = await User.findById(friendId).exec()

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId)
      friend.friends = friend.friends.filter((id) => id !== id)
    } else {
      user.friends.push(friendId)
      friend.friends.push(id)
    }

    await user.save()
    await friend.save()
    // TODO: try to use allSettled()
    const friends = await Promise.all(
      user.friends((id) => User.findById(id, '_id firstName lastName'))
    )

    res.status(200).json(friends)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
