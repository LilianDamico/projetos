import React from 'react';
import './Kanban.css';
import Head from '../../components/head/Head';
import KanbanBoard from '../../components/kanbanboard/KanbanBoard';
import Footer from '../../components/footer/Footer';

const Kanban = () => {
  return (
    <div>
      <Head />
      <KanbanBoard />
      <Footer />
    </div>
  )
}

export default Kanban;
