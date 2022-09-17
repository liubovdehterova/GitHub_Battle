import {useState, useEffect} from "react";
import {ThreeCircles} from  'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import {fetchPopularRepos} from "../../utils/api";
import SelectedLanguage from "./SelectedLanguage";
import Repos from "./Repos";



const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [repos, setRepos] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryLanguage = searchParams.get('lang') || '' ;
    const useDebounce = (value, delay) => {
        const [debounceValue, setDebounceValue] = useState(value);

        useEffect(() => {
            const DelayTimeOut = setTimeout(()=> setDebounceValue(value), delay);
            return ()=> {clearTimeout(DelayTimeOut)};

        },[value,delay]);

        return debounceValue;
    };

    const debounceLanguage = useDebounce(selectedLanguage,500);

    useEffect(()=> {
        (async () => {

            setRepos([]);
            setLoader(true);
            let data = await fetchPopularRepos(queryLanguage ? queryLanguage : debounceLanguage);
            setRepos(data);
            if(data.length) setLoader(false);

        }) ();

        return ()=> {console.log(`unmount`)};
    }, [debounceLanguage]);

    const selectedLanguageHandler = (language) => {
        setSelectedLanguage(language);
        setSearchParams({lang : language});
    }

    return (
        <div>
            <SelectedLanguage
                selectedLanguage={selectedLanguage}
                selectedLanguageHandler={selectedLanguageHandler}
                loader={loader}
                queryLanguage={queryLanguage ? queryLanguage : 'All'}
            />
            {loader ?
                <div className='loader'>
                    <ThreeCircles color="#d0021b"/>
                </div>
                : null}
            {repos.length ? <Repos repos={repos}/> : null}
        </div>

    );
}

export default Popular;