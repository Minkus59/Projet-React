import React from 'react'

const Tutorials = (props) => {

    setTimeout(() => {
        props.history.push('/')
    }, 5000);

    return (
        <div className="container mt-3">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oups !</strong> <p>Cette page est en construction.
            vous allez etre redirigé dans 5 secondes</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <h1>Tutoriel : intro à React</h1>
        </div>
    )
}

export default Tutorials