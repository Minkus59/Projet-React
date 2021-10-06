import React, { useLayoutEffect } from 'react';

function Favoris(props) {
    
    useLayoutEffect(() => {
        document.title = props.title
    })

    return (
        <div className="container">
            <h1>Vos films favoris</h1>
            
        </div>
    );
}

export default Favoris;