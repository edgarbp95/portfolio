import React from 'react'
import ButtonHover from './ButtonHover/ButtonHover'

const Banner = () => {
  return (
    <div className='clase-prueba mx-auto text-center z-10 px-52 flex flex-col gap-6 pb-10 sm:w-3/4 sm:px-0 md:pb-0'>
      <h1 className='text-5xl font-bold text-white sm:text-2xl md:text-3xl '>Diseño y desarrollo web</h1>
      <p className='text-white text-justify text-lg mb-6 mx-auto mt-6 tracking-wider leading-7 sm:text-base sm:hidden md:text-base '>Hola! Mi nombre es Edgar Buenaño y te doy la bienvenida a mi portfolio, dónde encontrarás todos mis proyectos. Si tienes una empresa y quieres ganar presencia en la web, o bien, si eres empleador y estás buscando contratar, no dudes en ponerte en contacto.
      </p>
      <p className='hidden sm:block'>Hola! Mi nombre es Edgar Buenaño y te doy la bienvenida a mi portfolio, dónde encontrarás todos mis proyectos. </p>
      <div className='z-10'>
        <ButtonHover />
      </div>
     </div>
        )
}

export default Banner
