import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

import PlayerPreview from "./PlayerPreview";
import PlayerInfo from "./PlayerInfo";
import {fetchResultBattle} from '../../redux/battle/battle.thunk';
import {
    setPlayerOneName,
    setPlayerTwoName,
    setPlayerOneImage,
    setPlayerTwoImage,
    setUserName
} from '../../redux/battle/battle.actions';



const Results = () => {
    const location = useLocation();

    const dispatch = useDispatch()
    const playerOneName = useSelector((state) => state.battleReducer.playerOneName);
    const playerTwoName = useSelector((state) => state.battleReducer.playerTwoName);
    const playerOneImage = useSelector((state) => state.battleReducer.playerOneImage);
    const playerTwoImage = useSelector((state) => state.battleReducer.playerTwoImage);
    const winnerScore = useSelector((state) => state.battleReducer.winnerScore);
    const loserScore = useSelector((state) => state.battleReducer.loserScore);
    const infoPlayerOne = useSelector((state) => state.battleReducer.infoPlayerOne);
    const infoPlayerTwo = useSelector((state) => state.battleReducer.infoPlayerTwo);
    const error = useSelector((state) => state.battleReducer.error);
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        dispatch(
            fetchResultBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
        )
    }, [location.search]);

    const handleReset = () => {
        dispatch(setPlayerOneName(''));
        dispatch(setPlayerOneImage(''));
        dispatch(setPlayerTwoName(''));
        dispatch(setPlayerTwoImage(''));
        dispatch(setUserName(''));
    }


    return (
        <div className="row">
            {error ? (
                <div>
                    <p>{error}</p>
                    <Link className="reset" to="/battle">
                        Reset
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="row">
                        <PlayerPreview username={playerOneName} avatar={playerOneImage}>
                            <PlayerInfo label="Winner" score={winnerScore} info={infoPlayerOne} />
                        </PlayerPreview>
                        <PlayerPreview username={playerTwoName} avatar={playerTwoImage}>
                            <PlayerInfo label="Loser" score={loserScore} info={infoPlayerTwo} />
                        </PlayerPreview>
                    </div>
                    <Link className="reset" to="/battle" onClick={handleReset}>
                        Next game
                    </Link>
                </div>
            )}
        </div>
    )
}
export default Results;