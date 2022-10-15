import {memo, useEffect, FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {RootState} from "../../types";
import {fetchPopularRepos} from "../../redux/popular/popular.thunk";
import {setSelectedLanguage} from "../../redux/popular/popular.slice";


const languages: string[] = ['All', 'Javascript', 'Python', 'Java', 'Ruby', 'Scala'];



const SelectedLanguages: FC = memo(
    (): JSX.Element => {
        const dispatch = useDispatch()
        const [searchParams, setSearchParams] = useSearchParams()
        const queryParams: string = searchParams.get('language') || 'all'

        const selectedLanguage: string = useSelector((state: RootState): string => state.popular.selectedLanguage)

        useEffect(() => {
            dispatch(fetchPopularRepos(selectedLanguage))
        }, [selectedLanguage])

        return (
            <ul className="languages">
                {languages.map((language: string, index: number): JSX.Element => {
                    return (
                        <li
                            key={index}
                            className={language === selectedLanguage || language.toLowerCase() === queryParams ? 'selected' : ''}
                            onClick={(): void => {
                                setSearchParams({language: language.toLowerCase()})
                                dispatch(setSelectedLanguage(language))
                            }}
                        >
                            {language}
                        </li>
                    )
                })}
            </ul>
        )
    }
)

export default SelectedLanguages;