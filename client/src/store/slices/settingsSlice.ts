import { STATUS } from 'src/store/constants'
import { createSlice } from '@reduxjs/toolkit'
import { sliceStateProps } from 'src/store/types'
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
    switchTheme: (state) => {
      state.data.theme = state.data.theme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { switchTheme } = settingsSlice.actions

export const selectSettings = (state: RootState) => state[settingsKey]

export default settingsSlice.reducer
