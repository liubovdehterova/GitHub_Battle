import {
    UPDATE_LANGUAGE,
    FETCH_POPULAR_REPOS_REQUEST,
    FETCH_POPULAR_REPOS_SUCCESS,
    FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constants'

const initialState = {
    selectedLanguage: '',
    loading: false,
    repos: [],
    error: null,
}

export const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LANGUAGE' :
            return {
                ...state,
                selectedLanguage: action.payload
            }
        case 'FETCH_POPULAR_REPOS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            }

        case 'FETCH_POPULAR_REPOS_SUCCESS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }

        case 'FETCH_POPULAR_REPOS_FAILURE':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}