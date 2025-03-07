import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const data = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(data.password, salt)

    const user = new User({ ...data, password: passwordHash })

    await user.save()

    res.status(201).json({
      message: 'User registered successfully',
      data: user,
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne(
      { email },
      '_id password firstName lastName picturePath'
    ).exec()

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    delete user.password

    res.status(200).json({ user, token })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
