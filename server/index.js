import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { register } from './controllers/auth.js'
import { createPost } from './controllers/posts.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'
import { verifyToken } from './middleware/auth.js'
// import { users, posts } from './data/index.js'
// import User from './models/User.js'
// import Post from './models/Post.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

/* File storage */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

/* Routes with files */
app.post('/auth/register', upload.single('picture'), register)
app.post('/posts', verifyToken, upload.single('picture'), createPost)

/* Routes */
app.get('/', (req, res) => {
  res.status(200).send('Server is running!')
})
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)

/* Mongoose setup */
const PORT = process.env.PORT || 3031
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    // await User.insertMany(users)
    // await Post.insertMany(posts)
  })
  .catch((error) => console.log(`${error} didn't connect`))
