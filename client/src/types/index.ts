export type ThemeTypes = 'light' | 'dark'

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  picturePath?: string
  friends: {
    id: string
    email: string
    firstName: string
    lastName: string
    picturePath?: string
  }[]
  location?: string
  occupation?: string
  viewedProfile: number
  impressions: number
}

export interface IPost {
  _id: string
  description: string
  picturePath?: string
  likes: {
    id: string
    email: string
    firstName: string
    lastName: string
    picturePath?: string
    createdAt: string
    updatedAt: string
  }[]
  comments: {
    id: string
    email: string
    firstName: string
    lastName: string
    picturePath?: string
    description: string
    createdAt: string
    updatedAt: string
  }[]
  createdAt: string
  updatedAt: string
  author: {
    id: string
    email: string
    firstName: string
    lastName: string
    location: string
    picturePath?: string
  }
}
