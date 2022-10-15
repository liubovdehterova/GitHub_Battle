import {AnyAction} from "redux";
import {AppDispatch} from "../../types";
import {fetchPopularReposFailure, fetchPopularReposRequest, fetchPopularReposSuccess} from "./popular.slice";
import {fetchPopularReposHttpRequest} from "../../utils/api";


export const fetchPopularRepos: any =
    (language: string) =>
        (dispatch: AppDispatch): Promise<AnyAction> => {
            dispatch(fetchPopularReposRequest())

            return fetchPopularReposHttpRequest(language)
                .then((data) => dispatch(fetchPopularReposSuccess(data)))
                .catch((error) => dispatch(fetchPopularReposFailure(error.message)))
        }