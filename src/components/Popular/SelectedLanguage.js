import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {fetchPopularRepos} from "../../redux/popular/popular.thunk";
import {setSelectedLanguage} from "../../redux/popular/popular.actions";


const languages = ['All', 'Javascript', 'CSS', 'Python', 'Java', 'Ruby'];

const SelectedLanguage = memo(() => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get('language') || 'all';
    const selectedLanguage = useSelector((state) => state.popularReducer.selectedLanguage);
    useEffect(() => {
        dispatch(fetchPopularRepos(selectedLanguage))
    }, [selectedLanguage])
    return (
        <ul className='languages'>
            {
                languages.map((language, index) => (
                <li
                    key={index}
                    className={
                        language === selectedLanguage || language.toLowerCase() === queryParams
                            ? 'selected'
                            : null
                    }
                    onClick={() => {
                        setSearchParams({ language: language.toLowerCase() })
                        dispatch(setSelectedLanguage(language))
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
}, (prevProps, nextProps) => {
    return prevProps.selectedLanguage === nextProps.selectedLanguage
})
export default SelectedLanguage;