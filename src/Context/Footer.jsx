import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Footer = () => {
    const {name}=useContext(UserContext);
  return (
    <div>
        <>This is a Message from Footer ({name})</>
    </div>
  )
}

export default Footer
