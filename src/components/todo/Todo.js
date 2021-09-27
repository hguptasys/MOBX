import React from 'react'
import { observer } from 'mobx-react-lite'
function Todo({ todoStoreData }) {
  console.log('todoData ===>', todoStoreData.todoData.name)

  //UPDATE NAME
  let updateTask = () => {
    todoStoreData.updateTask('Test')
  }

  let addTask = () => {
    todoStoreData.addTask('Play')
  }
  return (
    <div>
      <p>NAME: {todoStoreData.todoData.name}</p>
      <button onClick={updateTask}>Update Name</button>
      <button onClick={addTask}>Add Task</button>
      {todoStoreData.todoData.task.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default observer(Todo)
