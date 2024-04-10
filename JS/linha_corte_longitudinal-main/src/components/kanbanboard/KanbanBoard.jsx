import { React, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../column/Column';

export default function KanbanBoard() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);



  return (
    <DragDropContext>
        <h2 style={{textAlign: "center"}}>PROGRESS BOARD</h2>
        <div style={{
            display: "flex",
            justfyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        }}>

          <Column title={"TO DO"} tasks={incomplete} id={"1"} />

        </div>

    </DragDropContext>
  )
}
