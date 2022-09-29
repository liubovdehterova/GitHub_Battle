import {
    fetchResultBattleRequest,
    fetchResultBattleSuccess,
    fetchResultBattleFailure,
} from './battle.actions'

import { battle } from '../../utils/api'

export const fetchResultBattle = (playersArray) => (dispatch) => {
    dispatch(fetchResultBattleRequest())

    return battle(playersArray)
        .then((data) => dispatch(fetchResultBattleSuccess(data)))
        .catch((error) => dispatch(fetchResultBattleFailure(error)))
}