import {memo} from "react";

const SelectedLanguage = memo((props) => {

    const languages = ['All', 'Javascript', 'CSS', 'Python', 'Java', 'Ruby'];
    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li style={language === props.queryLanguage ? {color: '#d0021b'} : {}}
                    key={index}
                    onClick={() => props.selectedLanguageHandler(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
}, (prevProps, nextProps) => {
    return prevProps.selectedLanguage === nextProps.selectedLanguage;
})
export default SelectedLanguage;