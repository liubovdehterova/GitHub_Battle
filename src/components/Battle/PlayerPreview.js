const PlayerPreview = (props) =>  (
    <div>
        <div className="column">
            <img className='avatar' src={props.avatar} alt="Avatar"/>
            <h2 className='username'>
                {props.username}
            </h2>
        </div>
        {props.children}
    </div>
)


export default PlayerPreview;