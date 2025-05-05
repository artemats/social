import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const data = req.body

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)

    const newUser = new User({ ...data, password: hashedPassword })

    const savedUser = await newUser.save()

    const { password: _, ...userData } = savedUser.toObject()

    res.status(201).json({
      message: 'User registered successfully',
      data: userData,
    })
  } catch (err) {
    console.error('Registration error: ', err)
    res.status(500).json({ message: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne(
      { email },
      '_id email password firstName lastName picturePath'
    ).exec()

    if (!user) {
      return res.status(400).json({ message: 'User not found.' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    })

    const { password: _, ...userData } = user.toObject()

    res.status(200).json({ user: userData, token })
  } catch (err) {
    console.error('Login error: ', err)
    res.status(500).json({ message: err.message })
  }
}
