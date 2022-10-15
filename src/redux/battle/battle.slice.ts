import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BattleStateProps, BattleProfiles } from './types'

const initialState: BattleStateProps = {
    username: '',
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: '',
    playerTwoImage: '',
    winnerScore: null,
    loserScore: null,
    infoPlayerOne: null,
    infoPlayerTwo: null,
    error: '',
}

export const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setUsername: (state: BattleStateProps, action: PayloadAction<string>) => {
            state.playerOneName = action.payload
        },
        setPlayerOneName: (state: BattleStateProps, action: PayloadAction<string>) => {
            state.playerOneName = action.payload
        },
        setPlayerTwoName: (state: BattleStateProps, action: PayloadAction<string>) => {
            state.playerTwoName = action.payload
        },
        setPlayerOneImage: (state: BattleStateProps, action: PayloadAction<string>) => {
            state.playerOneImage = action.payload
        },
        setPlayerTwoImage: (state: BattleStateProps, action: PayloadAction<string>) => {
            state.playerTwoImage = action.payload
        },

        fetchResultBattleRequest: (state: BattleStateProps) => {
            state.error = ''
        },
        fetchResultBattleSuccess: (state: BattleStateProps, action: PayloadAction<BattleProfiles[]>) => {
            state.error = ''
            state.playerOneName = action.payload[0].profile.login
            state.playerTwoName = action.payload[1].profile.login
            state.playerOneImage = action.payload[0].profile.avatar_url
            state.playerTwoImage = action.payload[1].profile.avatar_url
            state.winnerScore = action.payload[0].score
            state.loserScore = action.payload[1].score
            state.infoPlayerOne = action.payload[0].profile
            state.infoPlayerTwo = action.payload[1].profile
        },
        fetchResultBattleFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

export const {
    setUsername,
    setPlayerOneName,
    setPlayerTwoName,
    setPlayerOneImage,
    setPlayerTwoImage,
    fetchResultBattleRequest,
    fetchResultBattleSuccess,
    fetchResultBattleFailure,
} = battleSlice.actions

export default battleSlice.reducer