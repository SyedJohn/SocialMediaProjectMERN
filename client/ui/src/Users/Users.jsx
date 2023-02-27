import React, { useState } from 'react'

function Users(props) {
     /* 
    console.log(props);
    const {name, age} = props;
    */
   const [name, setName] = useState("john");
   const changeName = (ev) => {
    setName(ev.target.value);
   }

  return (
    <>
    <h1>Users</h1>
    <input type="text" placeholder='enter name' onChange={changeName} />
    <h3>updated name : {name}</h3>
    </>
  )
}

export default Users;