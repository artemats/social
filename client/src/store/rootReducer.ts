import { combineReducers } from '@reduxjs/toolkit'
import settingsReducer, { settingsKey } from 'src/store/slices/settingsSlice'
import { api } from 'src/store/api'
import userReducer, { userKey } from 'src/store/slices/userSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [settingsKey]: settingsReducer,
  [userKey]: userReducer,
})

export default rootReducer
