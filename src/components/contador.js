import React from 'react';

export default class Contador extends React.Component {

    constructor(){
        super();
        this.state = {
            contador:0,
        }
    }

    // arrow function for using this from class context 
    decrementar = () => {
      this.setState({
          contador: this.state.contador -1,
      });  
    }

    // require a bind function on onclick function on button for using context of this
    incrementar () {
        this.setState({
            contador: this.state.contador +1,
        });  
      }

    render(){
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrementar}>-</button>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}