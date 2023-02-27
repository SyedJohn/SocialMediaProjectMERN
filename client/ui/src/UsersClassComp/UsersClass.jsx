import React, { Component } from 'react'

export default class UsersClass extends Component {
    constructor(){
        super();
        this.state = {
            name : "john",
            age : 24,
            gender : "male"
        }
    }

    changeHandler = (ev) => {
        console.log(ev.target.value);
        this.setState({
            name : ev.target.value
        });
    }

    clickHandler = () => {
        console.log("button clicked");
    }
  render() {
    const {name} = this.state;
    return (
      <React.Fragment>
        <input type="text" placeholder='enter your name' onBlur={this.changeHandler}/>
        <button onClick={this.clickHandler}>Click</button>
        <h1>your details are :</h1>
        <h3>{name}</h3>
        <h4>testing purpose</h4>
      </React.Fragment>
    )
  }
}
