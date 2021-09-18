import React, { useContext} from 'react'
import todoContext from '../Context/todoContext'
import { useHistory } from 'react-router-dom'

export const Body = props => {
  let history = useHistory()
  const context = useContext(todoContext)
  const { task, date, description } = context
  let confirm = document.getElementById('confirm')
  
  const AddData = e => {
    if (confirm.checked) {
      if (!task || !date || !description) {
        alert('Either Task, Description or Date field is empty..!')
      } else {
        context.addData(task, date, description, history)
        context.setTask('')
        context.setDate('')
        context.setDescription('')
        document.getElementById('confirm').checked = false
      }
    } else {
      alert('Please check-out the confirmation box.!')
    }
  }

  const EditData = () => {
    if (confirm.checked) {
      if (!task || !date || !description) {
        alert('Either Task, Description or Date field is empty..!')
      } else {
        context.editData(task, date, description, history)
        confirm.checked = false
      }
    } else {
      alert('Please check-out the confirmation box.!')
    }
  }

  let navStyle = {
    textAlign: 'center'
  }
  return (
    <>
      <div style={{ minHeight: '87vh' }}>
        <h2 style={navStyle} className='py-4'>
          <img
            src='https://img.icons8.com/fluency/50/000000/todo-list.png'
            alt=''
          />
          ToDo's List
        </h2>
        <div className='mb-5 px-5'>
          <div className='mb-3'>
            <label htmlFor='task' className='form-label'>
              Task
            </label>
            <input
              type='text'
              className='form-control'
              id='task'
              value={task}
              onChange={e => context.setTask(e.target.value)}
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              Save your task's in List.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input
              type='date'
              className='form-control'
              id='date'
              value={date}
              onChange={e => context.setDate(e.target.value)}
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              Select Task's date.
            </div>
          </div>
          <div className='form-floating'>
            <textarea
              className='form-control'
              placeholder='Enter the Descriptiocontext.n of your task here..'
              id='Description'
              value={description}
              onChange={e => context.setDescription(e.target.value)}
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor='floatingTextarea2'>Description</label>
          </div>
          <div className='mb-3 form-check py-3'>
            <input type='checkbox' className='form-check-input' id='confirm' />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Click here to confirm!
            </label>
          </div>
          <div className='col text-center'>
            {props.actionBtn ? (
              <button
                id='actionBtn'
                className='btn btn-primary'
                onClick={AddData}
                disabled={!task || !date || !description}
              >
                Add to List
              </button>
            ) : (
              ''
            )}
            {props.updateBtn ? (
              <button
                id='updateBtn'
                className='btn btn-primary'
                onClick={EditData}
                disabled={!task || !date || !description}
              >
                Update
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}
