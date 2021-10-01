import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

constructor(props) {
    super(props);

    this.state = {
        step: 1,
        name: 'toto'
    }    

    console.log(`Etape ${this.state.step} je suis dans le constructeur`)
}

componentDidMount() {
    console.log(`Etape ${this.state.step} je suis dans le componentDidMount`)
    this.setState({
        name: this.props.name,
        step: this.state.step +1
    })

    console.log(`Etape ${this.state.step} setState a changé le componentDidMount`)
}

componentDidUpdate(prevProps, prevState) {
    console.log(`Etape ${this.state.step} je suis dans le componentDidUpdate`)
    console.log(prevState);
    console.log(this.state);
}

componentWillUnmount() {
    console.log('Je suis dans le componentWillUnmount');
}


    render() {
        console.log(`Etape ${this.state.step} je suis dans le render`)
        return (
            <div className="borderBox">
                {console.log(`Etape ${this.state.step} mise à jour du DOM`)}
                <p>{this.state.step}</p>
                <p>{this.state.name}</p>

                {/* <ChildComponent /> */}
            </div>
        );
    }
}

export default LifeCycle;