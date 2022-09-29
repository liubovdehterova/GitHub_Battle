import {
    UPDATE_USERNAME,
    UPDATE_PLAYER_ONE_NAME,
    UPDATE_PLAYER_TWO_NAME,
    UPDATE_PLAYER_ONE_IMAGE,
    UPDATE_PLAYER_TWO_IMAGE,
    FETCH_RESULT_BATTLE_REQUEST,
    FETCH_RESULT_BATTLE_SUCCESS,
    FETCH_RESULT_BATTLE_FAILURE,
} from './battle.constants'

export const setUserName = (payload) => {
    return {
        type: 'UPDATE_USERNAME',
        payload,
    }
}

export const setPlayerOneName = (payload) => {
    return {
        type: 'UPDATE_PLAYER_ONE_NAME',
        payload,
    }
}

export const setPlayerTwoName = (payload) => {
    return {
        type: 'UPDATE_PLAYER_TWO_NAME',
        payload,
    }
}

export const setPlayerOneImage = (payload) => {
    return {
        type: 'UPDATE_PLAYER_ONE_IMAGE',
        payload,
    }
}

export const setPlayerTwoImage = (payload) => {
    return {
        type: 'UPDATE_PLAYER_TWO_IMAGE',
        payload,
    }
}

export const fetchResultBattleRequest = () => {
    return {
        type: 'FETCH_RESULT_BATTLE_REQUEST',
    }
}

export const fetchResultBattleSuccess = (payload) => {
    return {
        type: 'FETCH_RESULT_BATTLE_SUCCESS',
        payload,
    }
}

export const fetchResultBattleFailure = (payload) => {
    return {
        type: 'FETCH_RESULT_BATTLE_FAILURE',
        payload,
    }
}