import React, { Component } from 'react';

const countHits = (WrappedComponent, power) => {


    class CountHits extends Component {

        state = {
            hits: 0
        }
    
        addOneCoup = () => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits +1
                }
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState) {
                const persoName = WrappedComponent.name
                this.props.reduceHandler(persoName, power)
            }
        }
        

        render() {
            return <WrappedComponent addOneCoup={this.addOneCoup} coup={this.state} {...this.props} />
        }
    }

    return CountHits

}

export default countHits;