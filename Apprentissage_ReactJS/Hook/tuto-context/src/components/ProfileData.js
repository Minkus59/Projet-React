import React, { useContext } from 'react'
import ContentData from './ContentData';
import { UserContext } from './MyContext';

const ProfileData = () => {
    const user = useContext(UserContext)
    
    return (
        <div>
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExemple" role="button" area-expended="false" area-controls="collapseExemple">
                    Informations sur {user.name} ?
                </a>
            </p>
            <ContentData/>
        </div>
    )
}
 
export default ProfileData;