import { IUser } from 'src/types'

export type LoginUserProps = Pick<IUser, 'email' | 'password'>

export type RegisterUserProps = Pick<
  IUser,
  'firstName' | 'lastName' | 'email' | 'password'
>
