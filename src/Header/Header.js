import React, {useState} from "react";
import './Header.css';
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    //funçao que chama quando o usuario digita
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase().trim();
        setSearchTerm(value);
        onSearch(value);//chama a funçao recebida via props
    };

    return (
        <nav className="header__navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src={smallLeft} alt="Seta esquerda"/>
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt="Seta direita"/>
            </button>
        </div>
        <div className="header__search">
             <img src={search}  alt=""/>
             <input id="search-input" type="text" maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false" 
                 placeholder="O que você quer ouvir?" />
        </div>
        <div className="header__login">
             <button className="subscribe">Inscreva-se</button>
             <button className="login">Entrar</button>
        </div>
                
         </nav>
    )
};

export default Header;