import {PlayerProps} from "./types";
import {FC} from "react";
import {ThreeCircles} from 'react-loader-spinner';

const PlayerInfo: FC<PlayerProps> = (props: PlayerProps): JSX.Element => {
    return  props.info ? (
        <div className='popular-item'>
            <ul className="space-list-items">
                <li>Name: {props.info.name}</li>
                <li>Location: {props.info.location}</li>
                <li>Company: {props.info.company}</li>
                <li>Followers: {props.info.followers}</li>
                <li>Following: {props.info.following}</li>
                <li>Public Repos: {props.info.public_repos}</li>
                {props.info.blog && (
                    <li>
                        <a href={props.info.blog}>{props.info.blog}</a>
                    </li>
                )}
            </ul>

            <h1 className={props.label === 'Winner' ? 'winner' : 'loser'}>{props.label}</h1>
            <h3 className="score">Score: {props.score}</h3>
        </div>
    ) : (
        <div className='loader'>
            <ThreeCircles color="#d0021b"/>
        </div>
    )
}

export default PlayerInfo;