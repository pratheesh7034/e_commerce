import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import profile from '../assets/profile.png';
import Navbar from "./N";
import axios from 'axios';
import { useEffect,useState} from 'react';

function User() {
  const[user,setUser]=useState(null)
    //const user = JSON.parse(localStorage.getItem("user"));
const getuserid=localStorage.getItem("userId")
  useEffect(()=>{
      axios.get("http://localhost:3006/user/getUser/"+getuserid)
      .then((res)=>{
          setUser(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  })
    
  return (
    <div>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Card style={{ width: '18rem', alignItems: 'center' }}>
      <Card.Img variant="top" src={profile} />
      <Card.Body>
        <Card.Title>User Profile</Card.Title>
        <Card.Text>
          <h1>Welcome, {user?.name}!</h1>
          <p>Here's your profile information:</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Username:</strong> {user?.name}</ListGroup.Item>
        <ListGroup.Item><strong>Email:</strong> {user?.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/main">home</Card.Link>
        <Card.Link href="/wishlist">Wishlist</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default User
