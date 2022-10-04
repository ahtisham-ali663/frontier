import { createSlice } from '@reduxjs/toolkit'
import { AppConfig } from '../types/appConfigTypes'

const initialState: AppConfig = {
  configs: {
    DTM: false,
    INVOCA: false,
    isChatOpen: false,
  },
}

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setConfig: (state: AppConfig, action) => {
      state.configs = { ...state.configs, ...action.payload }
    },
  },
})
