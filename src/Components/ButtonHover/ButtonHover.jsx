import React from 'react'

const ButtonHover = () => {
  return (
    <div>
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
      </span>
      <span className="button-text">Contacto</span>
    </button>
    </div>
  )
}

export default ButtonHover
