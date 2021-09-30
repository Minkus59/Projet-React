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

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button onClick={this.openMenu} className={`navbar-toggler ${this.state.collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={this.state.toggler} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse  ${this.state.collapse}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Docs</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Tutorials">Tutorials</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Community">Community</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default Menu;