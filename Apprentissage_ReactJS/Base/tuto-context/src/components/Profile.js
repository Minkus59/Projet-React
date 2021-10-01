import React, { Component } from 'react'
import ProfileData from './ProfileData';
import lisa from '../assets/lisa.png'
import MyContext from './MyContext';

class Profile extends Component {
    render() { 
        return (
            <MyContext.Consumer>
                {
                    (data) => {
                        return (
                            <div className="container">
                            <h1>{data.name}</h1>
                            <img src={lisa} alt="lisa" className="img-thumbnail mb-3"/>
                        
                            <ProfileData/>
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}
 
export default Profile;