import '../styles/Cars.css'
import React ,{Component, Fragment} from 'react'
import Cars from './Cars'

class MyCars extends Component {

    state = {
        voitures: [
            {id: 1, name: 'Ford', color: 'red', year: 2010},
            {id: 2, name: 'Mercedes', color: 'black', year: 2020},
            {id: 3, name: 'Peugeot', color: 'green', year: 2008},

        ],
        titre: "Mes voitures"
    }

    addYear = () => {
        const uptadeYear = this.state.voitures.map((param) => {param.year -=10})
        this.setState({uptadeYear})
    }

    changeBind = (e) => {
        this.setState({
          titre: e.target.value
        })
      }

    render() {
        const year = new Date().getFullYear()

        return (
        <>
            <h1>{this.state.titre}</h1>

            <button onClick={this.addYear}>+10 ans</button>

            <table className="carsTable">
                <tr>
                    <th>Marque</th>
                    <th>Couleur</th>
                    <th>Age</th>
                </tr>

            {
                this.state.voitures.map((voiture, index) => {
                    return (
                        <Fragment key={index}>
                            <Cars name={voiture.name} color={voiture.color} year={year - voiture.year}/>
                        </Fragment>
                    )
                })
            }
            </table>
            <input type="text" onChange={this.changeBind} value={this.state.titre}/>
        </>
        )
    }
}

export default MyCars