import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import PlayerInput from "./PlayerInput"

const Battle = () => {
    const [playerOneName, setPlayerOneName] = useState('');
    const [playerTwoName, setPlayerTwoName] = useState('');
    const [playerOneImage, setPlayerOneImage] = useState(null);
    const [playerTwoImage, setPlayerTwoImage] = useState(null);

    const location = useLocation();

    const handleSubmit = (id, username) => {
        if (id === 'PlayerOne') {
            setPlayerOneName(username);
            setPlayerOneImage('https://github.com/' + username + '.png?size=200');
        } else {
            setPlayerTwoName(username);
            setPlayerTwoImage('https://github.com/' + username + '.png?size=200');
        }
    }

    const handleReset = (id) => {
        if (id === 'PlayerOne') {
            setPlayerOneName('');
            setPlayerOneImage(null);
        } else {
            setPlayerTwoName('');
            setPlayerTwoImage(null);
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