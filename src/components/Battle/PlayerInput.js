import {useState} from "react";

const PlayerInput = (props) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.id, username);
    }
    return (
        <form className='column' onSubmit={handleSubmit}>
            <label htmlFor="username">{props.label}</label>
            <input
                id="username"
                type="text"
                placeholder='Github username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <button
                className='button'
                type='submit'
                disabled={!username.length}
            >
                Submit
            </button>
        </form>

    );
}

export default PlayerInput;