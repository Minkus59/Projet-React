import React, { createContext, useState } from 'react';
import axios from 'axios';
export const MyContext = createContext();

const MovieApp = () => {
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
        <MyContext.Provider
          value={{
            setSearch,
            setFilms,
            search,
            films,
            handleSubmit,
          }}
        >
        </MyContext.Provider>
    );
}

export default MovieApp;