const PlayerInfo = (props) => {
    return (
        <div className="column">
            <ul className="users_data">
                <li>Name: {props.info.name}</li>
                <li>Location: {props.info.location}</li>
                <li>Company: {props.info.company}</li>
                <li>Followers: {props.info.followers}</li>
                <li>Folowing:{props.info.following}</li>
                <li>Public Repos: {props.info.public_repos}</li>
                <li>Blog: {props.info.blog}</li>
            </ul>
            <p className="scores" style={{textAlign: "center"}}>Score: {props.score}</p>
        </div>
    );
}

export default PlayerInfo;