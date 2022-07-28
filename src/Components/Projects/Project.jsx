import React from 'react'
import ButtonCard from '../ButtonHover/ButtonCard/ButtonCard'


const Project = ({tittle,web,github,img,refe}) => {
  return (
      <div ref={refe} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  relative  mb-4 sm:w-96">
        <a href="#" >
            <img className="rounded-t-lg h-52 w-full sm:h-32" src={img} alt="" />
        </a>
        <div className="px-4 py-3 flex flex-col gap-2 items-center sm:h-32 sm:justify-between">
            <a href={web}>
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white sm:text-sm md:text-base">
                {tittle}
            </h5>
            </a>
            <div className='flex gap-2 '>
                <a
                href={web}
                target="_blank"
                className="sm:w-16 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-customIndigo rounded-lg hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                <p className='sm:hidden md:text-xs'>Visitar sitio</p>
                <p className='hidden sm:flex sm:mx-auto sm:text-xs md:text-xs'>Ver</p>
                </a>
                <a
                href={github}
                target="_blank"
                >
                <ButtonCard clase="sm:w-16 sm:text-xs md:text-xs" textButton="Github"/>
                </a>
            </div>
        
        </div>
        </div>
  )
}

export default Project
