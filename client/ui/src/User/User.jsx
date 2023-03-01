import React from 'react'

function User(props) {
    const {firstName,id,picture} = props.user;
  return (
    <>
      <div>{firstName}</div>
      <img src={picture} alt="" />
    </>
  )
}

export default User;