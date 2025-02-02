import React from "react";
import './Main.css';
import playlist1 from "../assets/playlist/1.jpeg";
import playlist2 from "../assets/playlist/2.png";
import playlist3 from "../assets/playlist/3.jpeg";
import playlist4 from "../assets/playlist/4.jpeg";
import playlist5 from "../assets/playlist/5.jpeg";
import playlist6 from "../assets/playlist/6.jpeg";
import playlist7 from "../assets/playlist/7.jpeg";
import playlist8 from "../assets/playlist/8.jpeg";
import playlist9 from "../assets/playlist/9.jpeg";
import playlist10 from "../assets/playlist/10.jpeg";
import playlist11 from "../assets/playlist/11.jpeg";
import playlist12 from "../assets/playlist/12.jpeg";
import playlist13 from "../assets/playlist/13.jpeg";
import playlist14 from "../assets/playlist/14.jpeg";
import playlist15 from "../assets/playlist/15.jpeg";

const Main = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="" className="cards">
                                <div className="cards card1">
                                    <img src={playlist1} alt=""/>
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src={playlist2} alt=""/>
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src={playlist3} alt=""/>
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src={playlist4} alt=""></img>
                                    <span>Creators</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src={playlist5} alt=""></img>
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src={playlist6} alt=""></img>
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src={playlist7} alt=""></img>
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src={playlist8} alt=""></img>
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card9">
                                    <img src={playlist9} alt=""></img>
                                    <span>Funk</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card10">
                                    <img src={playlist10} alt=""></img>
                                    <span>MBP</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card11">
                                    <img src={playlist11} alt=""></img>
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card12">
                                    <img src={playlist12} alt=""></img>
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card13">
                                    <img src={playlist13} alt=""></img>
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card14">
                                    <img src={playlist14} alt=""></img>
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card15">
                                    <img src={playlist15} alt=""></img>
                                    <span>Rock</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="">
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Main;