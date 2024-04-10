import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
import logo from '../../assets/logo.png';

function Head() {
  return (
    <div className='frame1'>
        <div className='frame2'>
            <img src={logo} alt='logo' />
        </div>
        <div className='frame3'>
          <nav>
            <ul> 
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/kanban"}>Kanban</Link></li>
              <li><Link to={"/listas"}>Listas</Link></li>                              
            </ul>
          </nav>
        </div>
    </div>
    
  )
}

export default Head;