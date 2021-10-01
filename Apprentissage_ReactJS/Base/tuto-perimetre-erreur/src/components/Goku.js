import React, { Component } from 'react';
import goku from '../assets/goku.png'
import commun from './commun';

class Goku extends Component {

    render() {

        const {handleClickBd, bg} = this.props

        return (
            <div className={`col ${bg}`}>
                <img src={goku} onClick={handleClickBd} alt="Goku"/><br />

            </div>
        );
    }
}

export default commun(Goku)