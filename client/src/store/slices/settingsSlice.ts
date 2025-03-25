import { STATUS } from 'src/store/constants.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sliceStateProps } from 'src/store/types.ts'
import { ThemeTypes } from 'src/types'
import { RootState } from 'src/store'

const initialState: sliceStateProps<{ theme: ThemeTypes }> = {
  data: {
    theme: 'light',
  },
  status: STATUS.FULFILLED,
  error: null,
}

export const settingsKey = 'Settings'

export const settingsSlice = createSlice({
  name: settingsKey,
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeTypes>) => {
      state.data.theme = action.payload
    },
  },
})

export const { setMode } = settingsSlice.actions

export const selectSettings = (state: RootState) => state[settingsKey]

export default settingsSlice.reducer
