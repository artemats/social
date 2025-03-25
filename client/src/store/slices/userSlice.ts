import { sliceStateProps } from 'src/store/types.ts'
import { STATUS } from 'src/store/constants.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'src/types'

const initialState: sliceStateProps<{
  user: IUser | null
  token: string | null
}> = {
  data: {
    user: null,
    token: null,
  },
  status: STATUS.IDLE,
  error: null,
}

export const userKey = 'User'

export const userSlice = createSlice({
  name: userKey,
  initialState,
  reducers: {
    setLogin: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>,
    ) => {
      state.data.user = action.payload.user
      state.data.token = action.payload.token
    },
    setLogout: (state) => {
      state.data.user = null
      state.data.token = null
    },
    // TODO: add other reducers
  },
})

export const { setLogin, setLogout } = userSlice.actions

export const selectUser = (state: {
  [key: string]: sliceStateProps<{
    user: IUser | null
    token: string | null
  }>
}) => state[userKey]

export default userSlice.reducer
