import React,{ Component } from 'react';
import Tap from './components/addPeople.jsx';
import AddUser from './components/addUser.jsx';

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
      arreglo : [1,4,57,96,4,5,5,98,],
      arr : 1
    }
    this.addByOne = this.addByOne.bind(this)
  }

addByOne(){
  this.setState({
    arr : this.state.arr + 1
  })
}

  render () {
    return (
      <div >
        Hello World sadasdasd <br/>
        {this.state.arreglo[2]}<br/>
      <button className='button1'onClick={this.addByOne}></button><br/>
        {this.state.arr}<br/>
        <p>asdfadfa<br/>
        asdasdasdasdasdasda<br/>
        asddfadsas<br/>
        asdasdasd</p>
      <Tap/><br/>
      <AddUser/>
      </div>
    )
  }
}
