import React from 'react';
import './Head.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Head = () => {
  return (
    <div className='frame0'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
            
       <nav>
            <ul>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                    <Link to="/kanban" className='link'>Kanban</Link>
                </li>
                <li>
                    <Link to="/login" className='link'>Login</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Head;
