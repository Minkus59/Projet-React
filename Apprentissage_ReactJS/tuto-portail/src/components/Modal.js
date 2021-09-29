import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class Modal extends Component {

    constructor(props) {
        super(props);

        this.popUpContainer = document.createElement('div');
        document.body.appendChild(this.popUpContainer);    
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);  
    }

    render() {
        return ReactDOM.createPortal (
            <div className='modal' onClick={this.props.close}>
                <div>
                   <p>Ullamco enim sit elit enim velit duis exercitation amet sint sint. Nostrud et velit culpa officia aute. Anim nulla ad et adipisicing Lorem sunt consectetur dolor consectetur. Excepteur in non proident reprehenderit irure qui consectetur ipsum Lorem.</p>
                    <button>fermer le modal</button>
                </div>
            </div>,
            this.popUpContainer
        )
    }
}

export default Modal