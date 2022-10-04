import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import { RootState } from './RootState'
import { appDataSlice, appConfigSlice, acpSlice, loginSlice } from './slicers'

const reducer = combineReducers<RootState>({
  appData: appDataSlice.reducer,
  appConfig: appConfigSlice.reducer,
  acp: acpSlice.reducer,
  login: loginSlice.reducer,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), reduxThunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type TStore = ReturnType<typeof store.getState>
export default store
