import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteUser } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { DELETE_USER } from '../redux/constants/constants';

const User = ({user}) => {
    const dispatch = useDispatch()
    return (
        <div>
       <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'
        />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>{user.email}</Card.Meta>
        
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red' onClick={()=>dispatch(deleteUser(user._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}

export default User
