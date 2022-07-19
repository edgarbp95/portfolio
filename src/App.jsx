import React, { useState } from 'react'
import AboutMe from './Components/AboutMe'
import Banner from './Components/Banner'
import ContactForm from './Components/ContactForm'
import Navbar from './Components/Navbar/Navbar'
import ProjectsCollection from './Components/Projects/ProjectsCollection'

const App = () => {

    const screenHeight = window.innerHeight

    console.log(screenHeight)

    const [navState,setNavState]=useState()

    window.onscroll = function() {
        var y = window.scrollY;
        
        setNavState(y)

        console.log("este es el scroll en Y:",navState)
;
      };     


    const scrollY = ()=>{
        
        window.scroll({
            top: screenHeight-50,
            behavior: 'smooth'
          });
        
    
}
  return (
    <>
        <div className='flex flex-col h-screen bg-screen'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-0'></div>
        <Navbar addClass={navState >= 50 ? "nav-fixed pt-4" : "pt-10"}/>
        <Banner />
        <div className='absolute bottom-6 flex w-full justify-center z-40'>
            <svg
                onClick={scrollY}
                className='cursor-pointer hover:animate-ping hover:scale-125 duration-1000'
                fill="#fafafa"
                width={52}
                height={52}
                version="1.1"
                id="lni_lni-arrow-down"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                style={{ enableBackground: "new 0 0 64 64" }}
                xmlSpace="preserve"
            >
                <path
                d="M43.9,52.1c-0.6-0.7-1.7-0.8-2.5-0.2l-7.7,6.5V3c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8v55.4l-7.7-6.5
                c-0.7-0.6-1.8-0.5-2.5,0.2c-0.6,0.7-0.5,1.8,0.2,2.5l8.2,6.9c1,0.9,2.3,1.3,3.5,1.3s2.5-0.4,3.5-1.3l8.2-6.9
                C44.4,54,44.5,52.9,43.9,52.1z"
                />
            </svg>
        </div>
        </div>

        <div className='flex w-5/6 mx-auto flex-col mt-20'>
            <div className='flex flex-col gap-10 '>
                <h2 className='text-3xl font-bold tracking-widest mx-auto'>SOBRE MI</h2>
                <div className='flex gap-10'>
                    <AboutMe />
                    <ProjectsCollection />
                </div>
            </div>
            
            <div className='mt-20'>
                <ContactForm />
            </div>
            
        </div>
      

    </>
  )
}

export default App
