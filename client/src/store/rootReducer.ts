import { combineReducers } from '@reduxjs/toolkit'
import settingsReducer, { settingsKey } from 'src/store/slices/settingsSlice.ts'
import { usersApi } from 'src/store/usersApi.ts'
import userReducer, { userKey } from 'src/store/slices/userSlice.ts'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [settingsKey]: settingsReducer,
  [userKey]: userReducer,
})

export default rootReducer
