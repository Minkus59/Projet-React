import React, { Component } from 'react';
import vegeta from '../assets/vegeta.png'
import commun from './commun';

class Vegeta extends Component {

    render() {

        const {handleClickBd, bg} = this.props

        return (
            <div className={`col ${bg}`}>
                <img src={vegeta} onClick={handleClickBd} alt="Vegeta"/>
                <br />
 
            </div>
        );
    }
}

export default commun(Vegeta)