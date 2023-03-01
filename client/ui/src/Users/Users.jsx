import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users(props) {

  const APP_HEADER = "63ff1d1a4580b42a698457e5";
  const URL = "https://dummyapi.io/data/v1/user?limit=10";
   
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const {data : userData} = await (await axios.get(URL, {headers: { "app-id": APP_HEADER }})).data;
      console.log(userData);
      setUsers(userData);
    })()
  }, []);
  return (
    <>
      {users.map((user) => {
      return <h1>{user.firstName}</h1>})}
    </>
  )
}

export default Users;