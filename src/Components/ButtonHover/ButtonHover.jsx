import React from 'react'

const ButtonHover = () => {
  return (
    <div>
      <a href="#contact">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <span className="button-text">Contacto</span>
        </button>
      </a>
    </div>
  )
}

export default ButtonHover
