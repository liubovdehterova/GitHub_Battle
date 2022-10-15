import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPopularState, ReposType } from './types'

const initialState: IPopularState = {
    selectedLanguage: '',
    loading: false,
    repos: [],
    error: null,
}
export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        fetchPopularReposRequest: (state) => {
            state.loading = true
            state.error = null
        },
        fetchPopularReposSuccess: (state, action: PayloadAction<ReposType[]>) => {
            state.loading = false
            state.repos = action.payload
        },
        fetchPopularReposFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        setSelectedLanguage: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload
        },
    },
})

export const { fetchPopularReposRequest, fetchPopularReposSuccess, fetchPopularReposFailure, setSelectedLanguage } =
    popularSlice.actions

export default popularSlice.reducer