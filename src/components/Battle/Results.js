import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {ThreeCircles} from 'react-loader-spinner';
import {battle} from "../../utils/api";
import PlayerPreview from "./PlayerPreview";
import PlayerInfo from "./PlayerInfo";


const Results = () => {
    const location = useLocation();

    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        (async () => {
            setLoader(true);
            let data = await battle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')]);
            data && setWinner(data[0]);
            data && setLoser(data[1]);
            setLoader(false);
            setError(!data);
        })()
    }, [])


    return (
        <>
            <div className="row">
                {error ? <h2>Something went wrong, try to reload page </h2> : undefined}
                {loader ?
                    <div className='loader'>
                        <ThreeCircles color="#d0021b"/>
                    </div>
                    : null}
                <div className="column">
                    <h2 className='winner'>Winner</h2>
                    {
                        winner
                            ?
                            <PlayerPreview
                                username={winner.profile.login}
                                avatar={winner.profile.avatar_url}
                            >
                                <PlayerInfo
                                    name={winner.profile.name}
                                    location={winner.profile.location}
                                    company={winner.profile.company}
                                    followers={winner.profile.followers}
                                    following={winner.profile.following}
                                    public_repos={winner.profile.public_repos}
                                    blog={winner.profile.blog}
                                    score={winner.score}
                                />
                            </PlayerPreview>
                            :
                            null
                    }
                </div>
                <div className="column">
                    <h2 style={{color: 'grey'}}>Loser</h2>
                    {
                        loser
                            ?
                            <PlayerPreview
                                username={loser.profile.login}
                                avatar={loser.profile.avatar_url}
                            >
                                <PlayerInfo
                                    name={loser.profile.name}
                                    location={loser.profile.location}
                                    company={loser.profile.company}
                                    followers={loser.profile.followers}
                                    following={loser.profile.following}
                                    public_repos={loser.profile.public_repos}
                                    blog={loser.profile.blog}
                                    score={loser.score}
                                />
                            </PlayerPreview>
                            :
                            null
                    }
                </div>
            </div>
            <div className="new__game">
                <Link className="new__game__inner" to='/battle'>Next game</Link>
            </div>
        </>
    )
}

export default Results;