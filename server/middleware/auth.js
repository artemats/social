import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header('Authorization')

    if (!token) {
      return res.status(403).json({ message: 'Access denied' })
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trim()

      req.user = jwt.verify(token, process.env.JWT_SECRET)
      next()
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
