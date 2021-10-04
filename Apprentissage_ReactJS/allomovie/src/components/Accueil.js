import React, { useContext } from 'react';
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";
import Card from './Card';

function Accueil() {
    const { setSearch, movies, favoriteHandler } = useContext(MovieContext);

    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

    return (
        <div className="container">
            <h1>Films à découvrir</h1>

            {movies?.length > 0 ? (
            <div className="film">
            {movies?.map((movie) => {
                return (
                <Link /*'movies/tt1201607'*/
                    to={`film/${movie.imdbID}`} /* Router.js dinamik path yapısıyla aynı olacak şekilde imdbID ile routing işlemini yapınız */
                    className="text-link"
                    key={movie.imdbID}
                >
                    <Card
                    key={movie.imdbID}
                    image={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    addFavorite={(e) => favoriteHandler(movie, e)}
                    isFavorite={movie.isFavorite}
                    />
                </Link>
                );
            })}
            </div>
        ) : (
            <div className="search-warning">
            <p>Search a movie!</p>
            <p>i.e. Harry Potter</p>
            </div>
        )}
        </div>
    );
}

export default Accueil;