import {Link} from "react-router-dom";
import {FC} from "react";

const Home: FC = (): JSX.Element => (
    <div className='home-container'>
        <h1>GitHub Battle: Battle your friends... and stuff.</h1>
        <Link className='button' to='/battle'>Battle</Link>
    </div>
)
export default Home;