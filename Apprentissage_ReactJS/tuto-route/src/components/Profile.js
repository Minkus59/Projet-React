import React, { Component } from 'react';
import axios from 'axios'
import profilImg from '../assets/profile.png'

class Profile extends Component {

    state ={
        data: {}
    }

    componentDidMount() {
        const data = this.props.match.params.profileId

        let payload = {
            token: "3263zI0OwavxuNO1r00dKA",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 300
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp => {
            this.setState({
                data: resp.data[data]
            })
        });
    }

    render() {

        const {name, email, phone} = this.state.data

        return (
            <div className="container mt-3">
                <h1>Profil utilisateur</h1><hr />

                <img src={profilImg}/>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Nom :</strong> {name}
                    </li>
                    <li className="list-group-item">
                    <strong>Email :</strong> {email}
                    </li>
                    <li className="list-group-item">
                    <strong>Téléphone :</strong> {phone}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile;