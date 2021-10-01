import React, { Component } from 'react';

class ChildComponent extends Component {
 constructor(props) {
     super(props);
     this.state= {

     }

     console.log('Je suis dans le constructeur ENFANT')
 }
 
componentDidMount() {
    {console.log('Je suis dans le componentDidMount ENFANT')}
}

    render() {
        console.log('Je suis dans le render ENFANT')
        return (
            <div>
                Hello 
                {console.log('mise a jour du DOM ENFANT')}
            </div>
        );
    }
}



export default ChildComponent;