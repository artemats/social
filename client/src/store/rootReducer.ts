import { combineReducers } from '@reduxjs/toolkit'
import settingsReducer, { settingsKey } from 'src/store/slices/settingsSlice.ts'
import { usersApi } from 'src/store/usersApi.ts'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [settingsKey]: settingsReducer,
})

export default rootReducer
