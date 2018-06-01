import React,{ Component } from 'react';
import axios from 'axios';

export default class Tap extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }

  //axios get 'tapping api'
componentDidMount(){
 axios.get("http://174.138.36.217/people/")
  .then(res => {
    this.setState({people : res.data})
    console.log( this.state.people[1].first_name);
  })
}

  //axios post

  //axios.post()

  render () {
    let people = this.state.people
    return (
      <div>Hey babilonia endonde y  how are you te encuentras
      </div>
    )
  }
}
