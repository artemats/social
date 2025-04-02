import { combineReducers } from '@reduxjs/toolkit'
import settingsReducer, { settingsKey } from 'src/store/slices/settingsSlice.ts'
import { api } from 'src/store/api.ts'
import userReducer, { userKey } from 'src/store/slices/userSlice.ts'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [settingsKey]: settingsReducer,
  [userKey]: userReducer,
})

export default rootReducer
