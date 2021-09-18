import React,{useContext} from 'react'
import { TableRow } from './TableRow'
import todoContext from '../Context/todoContext'


export const Table = () => {
  const context = useContext(todoContext)
  return (
    <div className='container'>
      <div className='py-5'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Sr No.</th>
              <th scope='col'>Task</th>
              <th scope='col'>Date</th>
              <th scope='col'>Description</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody id='tableBody'>
            {context.todos.length === 0 ? (
              <tr>
                <td>"No todos to Display"</td>
              </tr>
            ) : (
              context.todos.map((todo, index) => {
                return <TableRow todo={todo} key={index} index={index}/>
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
