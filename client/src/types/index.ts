export type ThemeTypes = 'light' | 'dark'

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  picturePath?: string
  friends: { id: string }[]
  location?: string
  occupation?: string
  viewedProfile: number
  impressions: number
}

export interface IPost {
  _id: string
  userId: string
  firstName: string
  lastName: string
  location: string
  description: string
  picturePath?: string
  userPicturePath?: string
  likes: Record<string, boolean>[]
  comments: Record<number, string>[]
  createdAt: string
  updatedAt: string
}
