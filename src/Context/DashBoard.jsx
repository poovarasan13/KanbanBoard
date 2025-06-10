import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const DashBoard = () => {
  const {name,age}=useContext(UserContext)
  return (
    <div>
        <h1>Name: {name} </h1>
        <h2>Age:{age}</h2>
    </div>
  )
}

export default DashBoard
