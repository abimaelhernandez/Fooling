import React,{ Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
      arreglo : [1,4,57,96,4,5,5,98,]
    }
  }

  render () {
    return (
      <div >
      Hello World sadasdasdasdad]
      {this.state.arreglo[5]}
      </div>
    )
  }
}
