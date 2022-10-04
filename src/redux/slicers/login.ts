/* eslint-disable @typescript-eslint/indent */
import { createSlice } from '@reduxjs/toolkit'
import APIClient from 'src/api-client'

const initialState = {
  isLoading: true,
  loggedInState: undefined,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      }
    },
    setLoggedInState: (state, action) => {
      return {
        ...state,
        loggedInState: action.payload,
      }
    },
  },
})

export const authenticate = () => async (dispatch: any) => {
  dispatch(loginSlice.actions.setIsLoading(true))
  try {
    const response = await APIClient.profile()
    dispatch(loginSlice.actions.setLoggedInState(response?.data || {}))
  } catch (error) {
    dispatch(loginSlice.actions.setLoggedInState(undefined))
  }
  dispatch(loginSlice.actions.setIsLoading(false))
}
