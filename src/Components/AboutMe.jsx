import React, { useEffect, useState } from 'react'
import ButtonHover from './ButtonHover/ButtonHover'
import imgEdgar from "/src/Images/edgar.jpeg"

const AboutMe = () => {

  return (
    <div id="about" className='w-2/4 mx-auto mt-10 gap-10 flex sm:w-3/4 sm:flex-col '>
      <div className='flex flex-col w-64 sm:w-fit sm:mx-auto'>
        <img className=' rounded-lg shadow-lg shadow-customIndigo sm:h-60' src={imgEdgar} alt="foto-perfil" />
      </div>
      <div className='w-3/4 sm:w-full'>
        <h2 className='text-5xl font-bold text-customIndigoLight sm:text-3xl sm:text-center'>Sobre mí</h2>
        <p className='mt-4 text-justify text-base sm:text-sm'>Me estoy formando como desarrollador Full Stack. Actualmente me dedico a crear diseños web interactivos, funcionales y centrados en la buena experiencia del usuario. </p>
        <h3 className='mt-4 text-base font-medium '>Habilidades</h3>
        <p className='font-medium text-sm mt-2 tracking-wider'>HTML - CSS - JavaScript - Bootstrap - TailwindCSS - Git - React</p>
        <div className='flex flex-wrap gap-4 items-end'>
          <img className='h-14 mt-4 sm:h-8 ' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://devslearning.com/api/es/category/photo/6185721cda0dda4ad2ac7072" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://www.returngis.net/wp-content/uploads/2021/01/GitHub.png" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://res.cloudinary.com/marcomadera/image/upload/v1608823033/Blog/Git/Git-logo_pr848f.png" alt="" />
          <img className='h-16 mt-4 sm:h-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
          <img className='h-14 mt-4 sm:h-8 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="" />

        </div>

      </div>
    </div>
  )
}

export default AboutMe
