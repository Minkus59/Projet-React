import React, {useContext} from 'react'
import ProfileData from './ProfileData';
import lisa from '../assets/lisa.png'
import { UserContext } from './MyContext';

function Profile() {

    const user = useContext(UserContext)

    return (
        <div className="container">
        <h1>{user.name}</h1>
        <img src={lisa} alt="lisa" className="img-thumbnail mb-3"/>
    
        <ProfileData/>
        </div>
    )
}
 
export default Profile;