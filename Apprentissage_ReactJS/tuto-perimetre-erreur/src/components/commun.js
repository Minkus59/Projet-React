import React, {Component} from "react";

const commun = (WrappedComponent) => {
    
    class Commun extends Component {

        state = {
            bg: ''
        }
    
        handleBd = () => {
            if(WrappedComponent.name === 'Frieza') {
                this.setState({
                    bg: 'bg-danger'
                })
            }
            else {
                this.setState({
                    bg: 'bg-success'
                })
            }
        }

        render() {
        
            if(this.state.bg === "bg-danger") {
                throw new Error();
            }

            return <WrappedComponent handleClickBd={this.handleBd} bg={this.state.bg} />
        }
    }
    return Commun
}

export default commun

