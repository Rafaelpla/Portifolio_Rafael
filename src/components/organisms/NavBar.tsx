import ItemsNav from '../molecules/ItemsNav';
import Languageswitch from '../molecules/LanguageSwitch';


interface NavBarProps {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const Navbar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
    

    return(
        <div>
            <ItemsNav language={language} />
            <Languageswitch language={language} setLanguage={setLanguage} />
        </div>
    )
}

export default Navbar