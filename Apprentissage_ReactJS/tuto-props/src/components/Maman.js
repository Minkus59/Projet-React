import React, {Component} from 'react'
import Toto from "./Toto"

class Maman extends Component {

    state = {
        messageManan: null,
        messageToto: null
    }

    ordreManan = () => {
        this.setState({
            messageManan: 'Va ranger ta chambre'
        })
    }

    reponseToto = () => {
        this.setState({
            messageToto: "D'accord maman"
        })
    }

    render () {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreManan}>Ordre de maman</button>
                <p>{this.state.messageManan}</p>
                <hr />

                <Toto name='Toto' etat={this.state} reponseToto={this.reponseToto}/>
            </div>
        )
    }
}

export default Maman