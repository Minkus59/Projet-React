import React from "react";
import '../styles/Cars.css'
import { Fragment } from 'react';

const Car = ({name, color, year}) => {
    const nameInfo = name ? ( `${name}` ) : ( `inconnu `)
    const colorInfo = color ? ( ` ${color}` ) : ( `aucune` )
    const yearInfo = year ? ( `${year} ans` ) : ( `inconnu` )

    if(name) {
        return (
                <tr>
                    <td>{ nameInfo }</td>
                    <td>{ colorInfo }</td>
                    <td>{ yearInfo }</td>
                </tr>
        )
    }
    else {
        return (
            <div className="cars">
            Pas de données
            </div>
        )
    }

}

export default Car