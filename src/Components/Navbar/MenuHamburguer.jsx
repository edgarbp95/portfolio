import React, { useState } from 'react'

const MenuHamburguer = ({openMenu,active}) => {
    

  return (
    <div className='hidden sm:flex'>
        <div onClick={openMenu} className={`nav-gap w-14 h-14 flex flex-col items-center pt-2 ${active}`}>
            <div className="bg-white hambur-1 menu-hambur " />
            <div className="bg-white hambur-2 menu-hambur " />
            <div className="bg-white hambur-3 menu-hambur " />
        </div> 
        
    </div>
  )
}

export default MenuHamburguer
