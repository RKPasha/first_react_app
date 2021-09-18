import React from 'react'

export const Navbar = () => {
  let navStyle = {
    textAlign: 'center'
  }
  let myStyle = {
    margin: '15px'
  }
  return (
    <nav className='navbar-center navbar-light bg-light py-1' style={navStyle}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img
            src='https://img.icons8.com/dusk/50/000000/javascript-logo.png'
            width='40'
            height='40'
            alt=''
          />
          <strong style={myStyle}>JavaScript Learning</strong>
        </a>
      </div>
    </nav>
  )
}
