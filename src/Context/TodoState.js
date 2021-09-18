import todoContext from './todoContext'
import { useState, useEffect } from 'react'

const getData = () => {
  if (localStorage.getItem('itemsJson') === null) {
    return []
  } else {
    return JSON.parse(localStorage.getItem('itemsJson'))
  }
}

const TodoState = props => {
  const [task, setTask] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [index, setIndex] = useState(-1)
  const [todos, setTodos] = useState(getData())

    useEffect(() => {
    localStorage.setItem('itemsJson', JSON.stringify(todos))
  }, [todos])


  function addData (task, date, description) {
    var obj = {
      tsk: task,
      dt: date,
      des: description
    }
    setTodos([...todos, obj])
  }

  const onDelete = todo => {
    setTodos(
      todos.filter(e => {
        return e !== todo
      })
    )
  }

  const loadData = (todo, Uindex) => {
    // console.log(todo, Uindex)
    setIndex(Uindex)
    setTask(todo.tsk)
    setDate(todo.dt)
    setDescription(todo.des)
  }

  const editData = (task, date, description, history) => {
    // console.log(`index `, index)
    let newTodos = JSON.parse(JSON.stringify(todos))
    newTodos[index].tsk = task
    newTodos[index].dt = date
    newTodos[index].des = description
    setTodos(newTodos)
    history.push('/')
    setIndex(-1)
    setTask('')
    setDate('')
    setDescription('')
  }
  return (
    <todoContext.Provider
      value={{
        task,
        date,
        description,
        loadData,
        onDelete,
        addData,
        editData,
        todos,
        setTask,
        setDate,
        setDescription,
        setTodos
      }}
    >
      {props.children}
    </todoContext.Provider>
  )
}

export default TodoState
