import React, {useLayoutEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cart from "./Cart";

function Detail() {

    const { filmId } = useParams();
    const API_KEY = '8de54e609afba52ab8c0e7bec153112f';
    const [film, setFilms] = useState([]);
    const [genres, setGenre] = useState([]);
    const [productions, setProduction] = useState([]);

      useLayoutEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`)
        .then(response => {
            setFilms(response.data)
            setGenre(response.data.genres)
            setProduction(response.data.production_companies)
        })
        .catch(err => {
            console.log(err);
        })
      }, [filmId])

        
    return (
        film.length === undefined ? (
            <Cart film={film} genres={genres} productions={productions} />
        ) : (
            <div className="container mt-5">
                <div className="alert alert-danger mt-5" role="alert">
                  <h2>Aucun film n'a été trouvé !</h2>
                  <p><a href="/" >Retour à la page d'accueil</a></p>
                </div>
            </div>
        )
    );
};

export default Detail;