import { Link, useLocation } from 'react-router-dom'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import { useDispatch, useSelector } from 'react-redux'
import {
    setPlayerOneName,
    setPlayerTwoName,
    setPlayerOneImage,
    setPlayerTwoImage,
} from '../../redux/battle/battle.actions'

const Battle = () => {
    const dispatch = useDispatch()
    const playerOneName = useSelector((state) => state.battleReducer.playerOneName)
    const playerTwoName = useSelector((state) => state.battleReducer.playerTwoName)
    const playerOneImage = useSelector((state) => state.battleReducer.playerOneImage)
    const playerTwoImage = useSelector((state) => state.battleReducer.playerTwoImage)

    const location = useLocation()

    const handleSubmit = (id, username) => {
        if (id === 'PlayerOne') {
            dispatch(setPlayerOneName(username));
            dispatch(setPlayerOneImage('https://github.com/' + username + '.png?size=200'));
        } else {
            dispatch(setPlayerTwoName(username));
            dispatch(setPlayerTwoImage('https://github.com/' + username + '.png?size=200'));
        }
    }

    const handleReset = (id) => {
        if (id === 'PlayerOne') {
            dispatch(setPlayerOneName(''));
            dispatch(setPlayerOneImage(null));
        } else {
            dispatch(setPlayerTwoName(''));
            dispatch(setPlayerTwoImage(null));
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