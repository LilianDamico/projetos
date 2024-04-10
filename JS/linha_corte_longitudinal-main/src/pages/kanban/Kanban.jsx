import React from 'react';
import Head from '../../components/head/Head';
import KanbanBoard from '../../components/kanbanboard/KanbanBoard';
import Task from '../../components/task/Task';

function Kanban() {
  return (
    <div>
      <Head />
      <Task />
      <KanbanBoard />
    </div>
  )
}

export default Kanban;