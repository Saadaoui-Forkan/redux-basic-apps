import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addUser} from '../redux/UserSlice'
import '../App.css'

function Main() {
  const dispatch = useDispatch()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({name,email}))
  }
  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" placeholder='Enter your username' 
        onChange={(e) => setName(e.target.value)}
        />

        <input 
        type="email" placeholder='Enter your Email' 
        onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Click Here" />
      </form>
    </div>
  )
}

export default Main
