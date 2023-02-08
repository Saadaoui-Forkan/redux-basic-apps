import React from 'react'
import { useSelector  } from 'react-redux'
import '../App.css'

function Header() {

    const {name,email} = useSelector (state => state.user)
   //  const dispatch = useDispatch()

  return (
    <div className='header'>
       <h1 className="logo">
          LOGO
       </h1>

       <h4>
          {name}
       </h4>

       <h4>
          {email}
       </h4>
    </div>
  )
}

export default Header
