import React, { Component } from 'react';
import frieza from '../assets/frieza.png'
import commun from './commun';

class Frieza extends Component {

    render() {

        const {handleClickBd, bg} = this.props

        return (
            <div className={`col ${bg}`}>
                <img src={frieza} onClick={handleClickBd} alt="Frieza"/><br />
            </div>
        );
    }
}

export default commun(Frieza)