import { combineReducers } from '@reduxjs/toolkit'
import prodCommandReducer from '../reducers/prodCommand/prodCommandReducer'

export const rootReducer = combineReducers({
    prodCommand: prodCommandReducer,
})
