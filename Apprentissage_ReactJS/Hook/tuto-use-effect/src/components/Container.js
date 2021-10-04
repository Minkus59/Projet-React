import React, {useState} from 'react';
//import ClassDisplayKey from './ClassDisplayKey';
import FunctionDisplayKey from './FunctionDisplayKey';

function Container() {

    const [show, setShow] = useState(true)

    const btnDisplay = show ? 'Cacher' : 'Afficher'

    return (
        <div>
            <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>{btnDisplay}</button>

            {/* {
                show && <ClassDisplayKey />
            } */}

            {
                show && <FunctionDisplayKey />
            }
        </div>
    );
}

export default Container;