import React, {Component} from 'react';

class ClassCount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }        
    }

componentDidMount() {
    document.title = `J'ai cliqué ${this.state.count} fois`
}

componentDidUpdate(prevProps, prevState) {
    document.title = `J'ai cliqué ${this.state.count} fois`
}



render() {

        return (
            <div>
                <h1>Hello</h1>
                <p>
                    {document.title = `J'ai cliqué ${this.state.count} fois`}
                    <br />
                    <button onClick={() => this.setState({count: this.state.count +1})}>Cliquez</button>
                    </p>
            </div>
        );
    }
}

export default ClassCount;