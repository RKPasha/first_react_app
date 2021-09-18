import React from 'react'

export const Footer = () => {
    let myStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      positiion: "fixed"
    }
    return (
        <footer className="bg-light text-center text-white rounded"> 
        <div className="text-center p-3" style={myStyle}>
          © 2021 Copyright:
          <a className="text-white" href='/'>Duko Comunity</a>
        </div>
      </footer>
    )
}
