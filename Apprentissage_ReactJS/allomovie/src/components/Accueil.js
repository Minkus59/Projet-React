import React, { useLayoutEffect, useState } from 'react';
import '../styles/Accueil.css'
import axios from 'axios';
import noImage from '../assets/no-image.png'
//import { MyContext } from './MyContext';

function Accueil(props) {
    //const { handleSubmit, setSearch, films } = useContext(MyContext);

    useLayoutEffect(() => {
        document.title = props.title
    })

    const API_KEY = '8de54e609afba52ab8c0e7bec153112f';
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search !== '' && search !== undefined) {
            axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
            .then(response => {
                setFilms(response.data.results)
            })
            .catch(err => {
                console.log(err);
            })
        }
        else {
            setFilms('')
        }
    }

    return (
        <div className="container">
            <h1>Films à découvrir</h1>

            <form className="d-flex mt-5" onSubmit={(e) => {handleSubmit(e)}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => {setSearch(e.target.value)}}/>
                <button className="btn btn-outline-success">Search</button>
            </form>

        {films.length > 0 ? (
            <div className="row mt-5">                
                {films.map((film) => (
                    <div key={film.id} className="col-sm-3">
                        <div className="card mb-4">
                        {film.poster_path === null ? (
                            <img src={noImage} className="card-img-top" alt={film.title} />
                        ) : (
                            <img src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${film.poster_path}`} className="card-img-top" alt={film.title}/>
                        )}
                        <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.overview}</p>
                        <a href={`/film/${film.id}`} className="btn btn-primary">Détails</a>
                        </div>
                    </div>
                  </div>
                ))}
            </div> 
        ) : (
            <div className="alert alert-warning mt-5" role="alert">
            <h2>Rechercher un film !</h2>
            <p>ex: Gladiator</p>
            </div>
        )}
        </div>
    );
}

export default Accueil;