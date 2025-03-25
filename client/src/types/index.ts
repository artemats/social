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

export interface ITestUser {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  country: string
  city: string
  company: string
  position: string
}
