import React from "react";
import './BarraLateral.css';
import logoSpotify from "../assets/icons/logo-spotify.png";

const BarraLateral = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt="logo do spotify"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span className="fa fa-home"></span>
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua Biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É facil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>

            </section>
            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Portugues do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
}
export default BarraLateral;