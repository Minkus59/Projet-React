import React from 'react';
import noImage from '../assets/no-image.png'
import '../styles/Progress.css'

function Cart({film, genres, productions}) {

    const date = new Date(film.release_date);

    return (
        <div className="container mt-5">
            <div className="card mb-3 p-3 bg-dark">
                <div className="row g-0 bg-dark text-light">
                    <div className="col-md-4">
                    {film.poster_path === null ? (
                        <img src={noImage} className="card-img-top" alt={film.title} />
                    ) : (
                        <img src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${film.poster_path}`} className="card-img-top" alt={film.title}/>
                    )}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-5">
                            <h3 className="card-title mt-2 text-light">{film.title} ({date.getUTCFullYear()}) - {film.runtime}min</h3>
                            {genres.map((genre) => (<span key={genre.id} className="badge bg-secondary me-1">{genre.name}</span>))}
            
                            <p className="fst-italic mt-3">{film.tagline}</p>
            
                            <h6 className="mt-3">Synopsis</h6>
                            <p className="card-text">{film.overview}</p>
                            <p className="mt-5">
                            {productions.map((production) => (
                            production.logo_path === null || production.logo_path === undefined ? (
                                <img key={production.id} src={noImage} className="me-2" style={{width:"20px"}} alt={production.name} />
                                ) : (
                                <img key={production.id} className="me-2" style={{width:"20px"}} src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${production.logo_path}`} alt={production.name}/>
                                )
                            ))}
                            </p>
                            <div className="progress-circle">
                            <span>{film.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;