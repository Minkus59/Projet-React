import React, {Component} from 'react'
import Img from './Img'
import styled from 'styled-components'

const Titre = styled.h1`
color: red;
font-size: 80px;
`

const Submit = styled.input.attrs({ 
    type: 'submit'
    })`
padding: 10px;
margin: 10px;
background-color: red;
color: white;
`

class Form extends Component {
    state = {
        titre: "Formulaire",
        userName: "",
        color: "",
        colors: ["", "green", "red", "blue"],
        commentaire: ""
    }

    handlePseudo = e => {
        this.setState({
            userName: e.target.value
        })
    }

    handleColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleCom = e => {
        this.setState({
            commentaire: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
            console.log(`Pseudo: ${this.state.userName}
            Couleur ${this.state.color}
            Commentaire ${this.state.commentaire}`)
    }

    render() {
        return(
            <div>
                <Titre>{this.state.titre}</Titre>

                <Img color={this.state.color} />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Pseudo</label>
                            <input type="text" value={this.state.userName} onChange={this.handlePseudo}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                            <select value={this.state.color} onChange={this.handleColor}>
                                {this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                    })}
                            </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea 
                        value={this.state.commentaire}
                        onChange={this.handleCom}></textarea>
                    </div>
                    <Submit type="submit" value="Valider"></Submit>
                </form>
            </div>
        )
    }
}
export default Form