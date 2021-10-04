import React, {Component} from 'react'

class ClassState extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0
        }
    }

    AddOne = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter +1
            }
        })
    }

    render() { 
        return <div>
            <p>Class State : {this.state.counter}</p>

            <button onClick={this.AddOne}>Set dans class</button>
        </div>;
    }
}
 
export default ClassState;