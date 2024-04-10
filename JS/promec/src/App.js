import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Kanban from '../src/pages/kanban/Kanban';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>      
    </Router>
  );
}

export default App;
