import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import todoContext from '../Context/todoContext'

export const TableRow = props => {
  const context = useContext(todoContext)

  return (
    <>
      <tr>
        <th scope='row'>{props.index + 1}</th>
        <td>{props.todo.tsk}</td>
        <td>{props.todo.dt}</td>
        <td>{props.todo.des}</td>
        <td>
          <Link to='/edit'>
            <button
              className='btn btn-sm btn-warning mx-2'
              onClick={() => {
                console.log('edit clicked')
                context.loadData(props.todo, props.index)
              }}
            >
              Edit
            </button>
          </Link>
          <button
            className='btn btn-sm btn-danger'
            onClick={() => {
              context.onDelete(props.todo)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
