import mongoose from 'mongoose'

const FriendSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
    firstName: String,
    lastName: String,
    picturePath: String,
  },
  { timestamps: true }
)

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: [FriendSchema],
    },
    location: String,
    occupation: String,
    viewedProfile: {
      type: Number,
      default: 0,
    },
    impressions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
