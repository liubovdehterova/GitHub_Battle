import { configureStore } from '@reduxjs/toolkit'
import popularSlice from './popular/popular.slice'
import battleSlice from './battle/battle.slice'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        battle: battleSlice,
        popular: popularSlice,
    },
    middleware: [thunk],
})