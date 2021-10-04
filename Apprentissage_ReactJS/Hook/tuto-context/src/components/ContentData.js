import React, { useContext } from 'react'
import { UserContext, ColorContext } from './MyContext';

const ContentData = () => {

    const user = useContext(UserContext)
    const color = useContext(ColorContext)

    return(
        <div style={{color: color}}>
            <ul>
                <li>
                    <strong>Nom: </strong>{user.name}
                </li>
                <li>
                    <strong>Age: </strong>{user.age}
                </li>
            </ul>
        </div>
    )
}
 
export default ContentData;