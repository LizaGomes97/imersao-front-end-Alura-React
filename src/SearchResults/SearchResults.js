import React from "react";
import './SearchResults.css';

const SearchResults = ({artist}) => {
    if(artist.length === 0){
        return null
    }
    return (
        <div className="grid-container">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-card">
              <div className="card-img">
                <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <span className="artist-name">{artist.name}</span>
                <span className="artist-categorie">Artista</span>
              </div>
            </div>
          ))}
        </div>
      );
    };

    export default SearchResults;