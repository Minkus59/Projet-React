import React from 'react'
import ContentData from './ContentData';
import MyContext from './MyContext';


const ProfileData = () => {
    return (
        <MyContext.Consumer> 
            {
            (data) => {
                return (
                    <div>
                        <p>
                            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExemple" role="button" area-expended="false" area-controls="collapseExemple">
                                Informations sur {data.name} ?
                            </a>
                        </p>
                        <ContentData/>
                    </div>
                )
            }
        }
        </MyContext.Consumer>
    )
}
 
export default ProfileData;