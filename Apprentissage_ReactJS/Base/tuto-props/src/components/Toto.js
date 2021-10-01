import React from 'react'

const Toto = (props) => {

    //console.log(props.etat.messageToto);
    const btnRepToto = props.etat.messageManan !== null ? (<button onClick={props.reponseToto}>réponse</button>) : (<button disabled>réponse</button>)

    return (
        <div>
            <h2>{props.name}</h2>
            {btnRepToto}
            <p>{props.etat.messageToto}</p>
        </div>
    )
}
export default Toto