import React from "react";
import { useSelector } from 'react-redux'
import User from './User'
import './Users.css'

const UsersList = () => {

    const users = useSelector((state) => state.usersReducer)
   // console.log(users)

    return (
        <div className="userList-container">
              {
                 
                users.map((Users) =>(
                    <User Users={Users} key={users?._id} />
                    
                ))
               
              }
               
        </div>
    )
}

export default UsersList