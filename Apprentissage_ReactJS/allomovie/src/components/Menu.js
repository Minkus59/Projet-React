import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { MyContext } from './MyContext';

const Menu = () => {

    //const { handleSubmit, setSearch } = useContext(MyContext);

    const [Menu, setMenu] = useState({
        toggler: true,
        collapsed: "",
        collapse: "collapse"
    })

    const openMenu = () => {
        if(Menu.toggler === false) {
            setMenu({
                toggler: true,
                collapsed: "",
                collapse: "collapse"
            })
        }
        else {
            setMenu({
                toggler: false,
                collapsed: "collapsed",
                collapse: "colapse show"
            })
        }
    }

    return (
        <div className="bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand me-5" to="/">AlloMovie</Link>
                        <button onClick={openMenu} className={`navbar-toggler ${Menu.collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={Menu.toggler} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`navbar-collapse ${Menu.collapse}`} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item pe-3">
                                <NavLink className="nav-link" exact to="/">Accueil</NavLink>
                                </li>
                                <li className="nav-item pe-3">
                                <NavLink className="nav-link" to="/Favoris">Favoris</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* <form className="d-flex" onSubmit={(e) => {handleSubmit(e)}}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => {setSearch(e.target.value)}}/>
                            <button className="btn btn-outline-success">Search</button>
                        </form> */}
                        
                    </div>
                </nav>
            </div>
        </div>
    );
    
}

export default Menu;