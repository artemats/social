import { IUser } from 'src/types'

export type LoginUserProps = Pick<IUser, 'email' | 'password'>
