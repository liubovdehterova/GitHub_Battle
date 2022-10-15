import {fetchResultBattleFailure, fetchResultBattleRequest, fetchResultBattleSuccess} from "./battle.slice";
import {BattleProfiles} from "./types";
import {AppDispatch, AppThunk} from "../../types";
import {battle} from "../../utils/api";


export const fetchResultBattle: any =
    (playersArray: string[]): AppThunk => {
        return (dispatch: AppDispatch): Promise<any> => {
            dispatch(fetchResultBattleRequest())


            return battle(playersArray)
                .then((data: BattleProfiles[] | any) => {
                    return dispatch(fetchResultBattleSuccess(data));
                })
                .catch((error: string) => dispatch(fetchResultBattleFailure(error)))
        };
    }