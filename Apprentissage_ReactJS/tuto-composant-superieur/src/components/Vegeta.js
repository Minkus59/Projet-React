import React, { Component } from 'react';
import vegeta from '../assets/vegeta.png'
import countHits from './countHits'

class Vegeta extends Component {

    render() {

        const {name, addOneCoup, coup, life} = this.props
        const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className='btn btn-danger'>Mort</span></td>)
        const buttomlife = life > 0
         ? 
         (<button onClick={addOneCoup} className="btn btn-success">{name} Frappe</button>)
         : 
         (<button className="btn btn-success" disabled>{name} Frappe</button>)

        return (
            <div className="col">
                <img src={vegeta} alt="Vegeta"/><br />
                {buttomlife}

                <table className="table table-striped">
                    <thead>
                        <th scope="col">
                            Coups
                        </th>
                        <th scope="col">
                            Vie
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {coup.hits}
                            </td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Vegeta, 10);