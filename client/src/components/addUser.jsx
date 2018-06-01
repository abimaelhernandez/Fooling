import React, {Component} from 'react';

export default class AddUser extends Component {
  state = {
    name: '',
  }

  addNewUser = () => {
    axios.post()
  }

  render() {
    return(
      <div>
        Name: <input></input>
      </div>
    )
  }
}
