import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Container>
      <Row>
      {users.map(user => <User key = {user.id} user = {user}/>)}
      </Row>

      {/*{users.map((user) => {
        const {firstName,id,picture} = user;
      return (
      <div key={id}>
      <div>{firstName}</div>
      <img src={picture} alt="" />
      </div>
      )})} */}
    </Container>
  )
}

export default Users;