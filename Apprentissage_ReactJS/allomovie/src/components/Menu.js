import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Menu extends Component {
    state = {
        toggler: true,
        collapsed: "",
        collapse: "collapse"
    }

    openMenu = () => {
        if(this.state.toggler === false) {
            this.setState({
                toggler: true,
                collapsed: "",
                collapse: "collapse"
            })
        }
        else {
            this.setState({
                toggler: false,
                collapsed: "collapsed",
                collapse: "colapse show"
            })
        }
    }

    render(handleSearch) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand me-5" to="/">Navbar</Link>
                    <button onClick={this.openMenu} className={`navbar-toggler ${this.state.collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={this.state.toggler} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse  ${this.state.collapse}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item pe-3">
                            <NavLink className="nav-link" exact to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item pe-3">
                            <NavLink className="nav-link" to="/Favoris">Favoris</NavLink>
                            </li>
                        </ul>
                    </div>
                    <form class="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Menu;