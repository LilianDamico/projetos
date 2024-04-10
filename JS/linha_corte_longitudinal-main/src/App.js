import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Kanban from './pages/kanban/Kanban';
import Listas from './pages/listas/Listas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kanban' element={<Kanban />}/>
        <Route path='/listas' element={<Listas />} />
      </Routes>
    </Router>
  );
}

export default App;
