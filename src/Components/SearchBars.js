import React from 'react'

const SearchBars = () => {
    return (
        <div className='container'>
            <hr />
        <nav className='navbar-center' style={{ textAlign: 'center' }}>
          <div className='container-fluid d-flex p-2'>
            <input
              id='searchItem'
              className='form-control me-2'
              type='search'
              placeholder="Search By Task's name"
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success'
              onClick='searchByName()'
            >
              Search
            </button>
            <input
              id='searchItemByDate'
              className='form-control me-2'
              style={{ marginLeft: '8px' }}
              dtype='date'
              placeholder="Search By Task's Date"
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success'
              onClick='searchByDate()'
            >
              Search
            </button>
          </div>
          <div className='container-fluid py-3'>
            <button
              className='btn btn-outline-warning px-3'
              onClick='updateTable()'
            >
              Clear
            </button>
          </div>
        </nav>
        </div>
    )
}

export default SearchBars
