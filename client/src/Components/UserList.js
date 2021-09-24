import React,{useEffect} from 'react'
import { getUsers } from "../redux/actions/action";
import {useDispatch, useSelector} from 'react-redux'
import User from './User';

const UserList = () => {
    const UsersList = useSelector(state => state.userReducer.users)
    const dispatch =useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div style={{display:'flex' , justifyContent:"space-between" ,margin:30}}>
            {UsersList.map(e=><User user={e} key={e._id}/>)}
        </div>
    )
}

export default UserList
