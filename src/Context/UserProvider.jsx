import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = (props) => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
  return (
    <div>
        <UserContext.Provider value={{name,setName,age,setAge}} >
            {props.children}
        </UserContext.Provider>
      
    </div>
  )
}

export default UserProvider
