import {
    UPDATE_LANGUAGE,
    FETCH_POPULAR_REPOS_REQUEST,
    FETCH_POPULAR_REPOS_SUCCESS,
    FETCH_POPULAR_REPOS_FAILURE,
} from './popular.constants'

export const setSelectedLanguage = (payload) => ({
    type: 'UPDATE_LANGUAGE',
    payload
});

export const fetchPopularReposRequest = () => ({
        type: 'FETCH_POPULAR_REPOS_REQUEST'
});

export const fetchPopularReposSuccess  = (payload) => ({
    type: 'FETCH_POPULAR_REPOS_SUCCESS',
    payload
});
export const fetchPopularReposFailure   = (payload) => ({
    type: 'FETCH_POPULAR_REPOS_FAILURE',
    payload
});
