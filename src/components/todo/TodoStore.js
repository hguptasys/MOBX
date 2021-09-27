import React from 'react'
import {
  action,
  makeObservable,
  observable,
  computed,
  autorun,
  runInAction,
} from 'mobx'

class TodoStore {
  todoData = {
    id: 'abc123',
    name: 'Hemant',
    task: ['sleep', 'work', 'eat']
  }

  constructor() {
    makeObservable(this, {
      todoData: observable,
      totalTask: computed,
      updateTask: action,
      addTask: action,
    })
    autorun(this.allTaskDetails)
    runInAction(this.preFetchData)
  }

  get totalTask() {
    console.log("getter")
    return this.todoData.task.length
  }

  preFetchData(){
      console.log("preFetchData")
  }

  //LENGTH OF TASK
  allTaskDetails = () => {
    console.log('allTaskDetails', this.totalTask)
  }

  //UPDATE TASK
  updateTask(name) {
    console.log('updateTask ===>', name)
    this.todoData.name = name
  }

  //ADDING TASK
  addTask(task) {
    console.log('addTask ===>', task)
    this.todoData.task=[...this.todoData.task,task]
  }
}

export default TodoStore
