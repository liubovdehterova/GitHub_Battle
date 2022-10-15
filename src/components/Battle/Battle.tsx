import { Link, useLocation } from 'react-router-dom'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { useDispatch, useSelector } from 'react-redux'
import {
    setPlayerOneName,
    setPlayerTwoName,
    setPlayerOneImage,
    setPlayerTwoImage,
} from '../../redux/battle/battle.slice'
import {FC} from "react";
import {RootState} from "../../types";

const Battle: FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const playerOneName = useSelector((state: RootState): string => state.battle.playerOneName)
    const playerTwoName = useSelector((state: RootState): string => state.battle.playerTwoName)
    const playerOneImage = useSelector((state: RootState): string => state.battle.playerOneImage)
    const playerTwoImage = useSelector((state: RootState): string => state.battle.playerTwoImage)

    const location = useLocation()

    const handleSubmit = (id: string, username: string) => {
        if (id === 'PlayerOne') {
            dispatch(setPlayerOneName(username));
            dispatch(setPlayerOneImage('https://github.com/' + username + '.png?size=200'));
        } else {
            dispatch(setPlayerTwoName(username));
            dispatch(setPlayerTwoImage('https://github.com/' + username + '.png?size=200'));
        }
    }

    const handleReset = (id: string) => {
        if (id === 'PlayerOne') {
            dispatch(setPlayerOneName(''));
            dispatch(setPlayerOneImage(''));
        } else {
            dispatch(setPlayerTwoName(''));
            dispatch(setPlayerTwoImage(''));
        }
    }
    return (
        <div>
            <div className='row'>
                {
                    !playerOneName ?
                        <PlayerInput
                            id='PlayerOne'
                            label='Player1'
                            onSubmit={handleSubmit}
                        />
                        :
                        <PlayerPreview
                            username={playerOneName}
                            avatar={playerOneImage}
                        >
                            <button className='reset'
                                    onClick={() => handleReset('PlayerOne')}
                            >
                                Reset
                            </button>
                        </PlayerPreview>

                }

                {
                    !playerTwoName ?
                        <PlayerInput
                            id='PlayerTwo'
                            label='Player2'
                            onSubmit={handleSubmit}
                        />
                        :
                        <PlayerPreview
                            username={playerTwoName}
                            avatar={playerTwoImage}
                        >
                            <button className='reset'
                                    onClick={() => handleReset('PlayerTwo')}
                            >
                                Reset
                            </button>
                        </PlayerPreview>

                }
            </div>
            {
                playerOneImage && playerTwoImage &&
                <Link className='button' to={{
                    pathname: location.pathname + '/results',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }}>
                    Battle
                </Link>
            }
        </div>
    );
}
export default Battle;