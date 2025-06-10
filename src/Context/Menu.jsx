import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import Form from './Form';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import DashBoard from './DashBoard';

const Menu = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/home' element={<DashBoard/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Menu
