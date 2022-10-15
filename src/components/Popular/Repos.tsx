import {useSelector} from 'react-redux';
import {ThreeCircles} from 'react-loader-spinner';
import {FC, memo} from "react";
import {RootState} from "../../types";
import {ReposType} from "../../redux/popular/types";

const Repos: FC = memo((): JSX.Element => {
    const repos: ReposType[] = useSelector((state: RootState): ReposType[] => state.popular.repos)
    const loading = useSelector((state: RootState) => state.popular.loading)

    return (
        <ul className='popular-list'>
            {
                loading ? (
                <div className='loader'>
                    <ThreeCircles color="#d0021b"/>
                </div>
            ) : (
                repos.map((repo:  ReposType, index: number): JSX.Element => (
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
            )}
        </ul>
    );
})
export default Repos;
