import {
    UPDATE_PLAYER_ONE_NAME,
    UPDATE_PLAYER_TWO_NAME,
    UPDATE_PLAYER_ONE_IMAGE,
    UPDATE_PLAYER_TWO_IMAGE,
    FETCH_RESULT_BATTLE_REQUEST,
    FETCH_RESULT_BATTLE_SUCCESS,
    FETCH_RESULT_BATTLE_FAILURE,
    UPDATE_USERNAME,
} from './battle.constants'

const initialState = {
    username: '',
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
    winnerScore: null,
    loserScore: null,
    infoPlayerOne: null,
    infoPlayerTwo: null,
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.payload,
            }

        case 'UPDATE_PLAYER_ONE_NAME':
            return {
                ...state,
                playerOneName: action.payload,
            }

        case 'UPDATE_PLAYER_TWO_NAME':
            return {
                ...state,
                playerTwoName: action.payload,
            }

        case 'UPDATE_PLAYER_ONE_IMAGE':
            return {
                ...state,
                playerOneImage: action.payload,
            }

        case 'UPDATE_PLAYER_TWO_IMAGE':
            return {
                ...state,
                playerTwoImage: action.payload,
            }

        case 'FETCH_RESULT_BATTLE_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            }

        case 'FETCH_RESULT_BATTLE_SUCCESS':
            return {
                ...state,

                loader: false,
                error: '',
                playerOneName: action.payload[0].profile.name,
                playerTwoName: action.payload[1].profile.name,
                playerOneImage: action.payload[0].profile.avatar_url,
                playerTwoImage: action.payload[1].profile.avatar_url,

                winnerScore: action.payload[0].score,
                loserScore: action.payload[1].score,

                infoPlayerOne: action.payload[0].profile,
                infoPlayerTwo: action.payload[1].profile,
            }

        case FETCH_RESULT_BATTLE_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}