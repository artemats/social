import bcrypt from "bcrypt"
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
  console.log('ctrl, login')
}