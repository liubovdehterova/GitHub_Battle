const PlayerInfo = (props) => {
    return (
        <div className="column">
            <ul className="users_data">
                <li>Name: {props.name}</li>
                <li>Location: {props.location}</li>
                <li>Company: {props.company}</li>
                <li>Followers: {props.followers}</li>
                <li>Folowing:{props.following}</li>
                <li>Public Repos: {props.public_repos}</li>
                <li>Blog: {props.blog}</li>
            </ul>
            <p className="scores" style={{textAlign: "center"}}>Score: {props.score}</p>
        </div>
    );
}

export default PlayerInfo;