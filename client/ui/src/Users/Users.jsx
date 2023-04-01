import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSearchParams} from "react-router-dom";


function Users(props) {

  const APP_HEADER = "63ff1d1a4580b42a698457e5";
  const URL = "https://dummyapi.io/data/v1/user?limit=10";
   
  const [users, setUsers] = useState([]);
  const [searchQuery] = useSearchParams();
  useEffect(() => {
    (async () => {
      const {data : userData} = await (await axios.get(URL, {headers: { "app-id": APP_HEADER }})).data;
      console.log(userData);
      setUsers(userData);
    })()
  }, []);

  const search=(user)=>{
    const name = (user.firstName + user.lastName).toLowerCase();
    const query = searchQuery.get('user');
    console.log(name);
    console.log(query);
    console.log(query===null);
    console.log(name.includes(searchQuery.get('user')));
    console.log(query===null || name.includes(searchQuery.get('user')));
    return  query===null || name.includes(searchQuery.get('user'));
}

  return (
    <Container>
      <Row>
      {users.filter(search).map(user => <User key = {user.id} user = {user}/>)}
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