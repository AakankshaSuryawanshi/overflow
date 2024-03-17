import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";

const UserProfile = () => {
 
  const { id }  = useParams
  const users= useSelector((state) => state.usersReducer)
  const currentProfile = users.filter((user) => user._id === id)[0]
 const currentUser = useSelector((state) => state.currentReducer)
 console.log(currentProfile)

    return(
        <div className="home-container-1">
          <LeftSidebar/>
          <div className="home-container-2">
            <section>
              <div className="user-details-container">
                     <div className="user-details">
                           <Avatar backgroundColor="purple" color="white" fontSiZe="50px" px="40px" py="30px" >
                           {currentProfile?.name.charAt(0).toUpperCase()}
                           </Avatar>
                           <div className="user-name">
                                 <h1>{currentProfile?.name}</h1>
                                 <p></p>
                           </div>
                     </div>
              </div>
            </section>

          </div>
          
        </div>
    )

}

export default UserProfile