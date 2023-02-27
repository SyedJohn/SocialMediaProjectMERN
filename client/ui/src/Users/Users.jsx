import React from 'react'

function Users(props) {
    console.log(props);
    const {name, age} = props;
  return (
    <>
    <h1>Users using props</h1>
    <h3>user name : {name}</h3>
    <h3>user age : {age}</h3>
    </>
  )
}

export default Users;