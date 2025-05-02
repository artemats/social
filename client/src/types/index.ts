export type ThemeTypes = 'light' | 'dark'

export interface IUser {
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
