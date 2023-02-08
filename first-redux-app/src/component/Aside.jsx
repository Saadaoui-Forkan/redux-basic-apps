import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

function Aside() {

  const { name } = useSelector(state => state.user)

  return (
    <div className='aside'>
      <h2 className="aside-item">Home</h2>
      <h2 className="aside-item">About</h2>
      <h2 className="aside-item">Blog</h2>
      <h2 className="aside-item">Contact</h2>
      <h2 className="aside-item">{name}</h2>
    </div>
  )
}

export default Aside
