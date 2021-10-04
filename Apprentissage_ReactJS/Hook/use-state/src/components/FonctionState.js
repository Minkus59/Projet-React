import React, {useState} from 'react'

export default function FonctionState() {

    const [counter, setCounter] = useState(0)

    const addOne = () => {
        setCounter(prevCounter => prevCounter +1)
    }

    return (
        <div>
            <p>
                Fonction State : {counter}
            </p>
            <button onClick={addOne}>State dans fonction</button>
        </div>
    )
}
