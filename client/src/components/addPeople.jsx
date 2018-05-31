import React,{ Component } from 'react';
import axios from 'axios';

export default class AddPeople extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }

  //axios get
componentDidMount(){
 axios.get("http://174.138.36.217/people/")
  .then(res => {
    this.setState({people : res.data})
    console.log( this.state.people[1].first_name);
  })
}

  //axios post

  render () {
    return (
      <div>Hey babilonia endonde y  how are you te encuentras
      </div>
    )
  }
}
