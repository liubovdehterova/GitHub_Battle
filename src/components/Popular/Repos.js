import {useSelector} from 'react-redux';
import {ThreeCircles} from 'react-loader-spinner';

const Repos = () => {

    const repos = useSelector((state) => state.popularReducer.repos)
    const loading = useSelector((state) => state.popularReducer.loading)

    return (
        <ul className='popular-list'>
            {loading ? (
                <div className='loader'>
                    <ThreeCircles color="#d0021b"/>
                </div>
            ) : (
                repos.map((repo, index) => (
                        <li key={repo.id} className='popular-item'>
                            <div className='popular-rank'>
                                #{index + 1}
                            </div>
                            <ul className='space-list-items'>
                                <li>
                                    <img className='avatar' src={repo.owner.avatar_url} alt="Avatar"/>
                                </li>
                                <li>
                                    <a href={repo.html_url}>
                                        {repo.name}
                                    </a>
                                </li>
                                <li>
                                    {repo.owner.login}
                                </li>
                                <li>
                                    {repo.stargazers_count}
                                </li>
                            </ul>
                        </li>
                    )
                )
                )
            }
        < /ul>
    );
}
export default Repos;
