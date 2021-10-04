import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios'

function App() {

  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState({})
  const [dark, setDark] = useState(false)

  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response => {
      setProfile(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [count]);

  const isOverTenMemorised = useMemo(() => {
    return count > 10
  }, [count])

  const goDark = () => {
    setDark(!dark)
    if(!dark) {
      document.body.classList.add("bg-secondary")
    }
    else {
      document.body.classList.remove("bg-secondary")
    }
  }

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark'
  const textBtnTheme = dark ? 'Theme clair' : 'Theme sombre'

  return (
    <div className="container">
        <h1 className="text-center">UseMeno()</h1>

        {isOverTenMemorised && <div className="alert alert-danger">Stop !!</div>}

        <button onClick={() => {setCount(count +1)}} className="btn btn-info mb-3">Increment {count}</button>
        <button onClick={goDark} className={`btn ${classBtnTheme} mb-3 float-end`}>{textBtnTheme}</button>

        <Profile profile={profile} count={count}/>
    </div>
  );
}

export default App;
