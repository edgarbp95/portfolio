import React, { useRef, useState } from 'react'
import AboutMe from './Components/AboutMe'
import Banner from './Components/Banner'
import Carousel from './Components/Carousel'
import EjemploRef from './Components/EjemploRef'
import Navbar from './Components/Navbar/Navbar'
import ProjectsCollection from './Components/Projects/ProjectsCollection'
import SocialMenu from './Components/SocialMenu/SocialMenu'
import iconInstagram from "/src/Images/instagram-original.svg"
import iconGithub from "/src/Images/github-original.svg"
import iconLinkedin from "/src/Images/linkedin.svg"
import ContactForm from './Components/Form/ContactForm'

const App2 = () => {
  
  const menuRef = useRef()

  const [menuActive, setMenuActive] = useState(false)
    const [animation, setAnimation] = useState("")

    function disableScroll() {
      document.body.classList.add("stop-scrolling");
    }
    
    function enableScroll() {
      document.body.classList.remove("stop-scrolling");
    }


    const openMenu = ()=>{
        if(!menuActive){console.log(menuRef),setAnimation("open-menu"), setMenuActive(!menuActive),disableScroll(),menuRef.current.style.display="flex";
        }
        else{
            setAnimation("close-menu"), setMenuActive(!menuActive),enableScroll()
        }

        
      }
      
      
  return (
    <>
    <div className='pb-20 sm:pb-10 md:pb-0'>
      <div className='hero z-0 '>
        <Navbar openMenu={openMenu} active={menuActive ? "active" : ""}/>
        
        <div className='hero__inner'>
            <div className='hero__divider z-50'>
                <Banner />
            </div>
        </div>
      </div>

      <div className='relative clase-prueba-2 sm:w-3/4 flex flex-col gap-10 mx-auto mt-0 justify-center py-6 md:w-3/4 '>
        {/* <h2 className='text-5xl font-semibold text-indigo-900 z-10 text-center'>Sobre mi</h2> */}
        <AboutMe />
      </div>
    </div>

        <div id='projects' className='clase-prueba-2 sm:w-5/6 mx-auto py-10 sm:p-4 md:w-5/6'>
            
            <ProjectsCollection />

            {/* <Carousel /> */}
        </div>
      <SocialMenu/>
      <div ref={menuRef} className={`hidden absolute right-0 left-0 top-24 h-screen  bg-customIndigoLight z-50 ${animation} pt-52`}>
        <ul className={`${menuActive ? "flex" : "hidden"} flex flex-col text-center text-white font-medium gap-6 text-lg w-full`}>
          <a className="no-underline hover:no-underline hover:text-white" onClick={openMenu} href="#about"><li className='hover:border-b border-white w-fit mx-auto'>SOBRE MI</li></a>
          <a className="no-underline hover:no-underline hover:text-white" onClick={openMenu} href="#contact"><li className='hover:border-b border-white w-fit mx-auto'>CONTACTO</li></a>
          <a className="no-underline hover:no-underline hover:text-white" onClick={openMenu} href="#projects"><li className='hover:border-b border-white w-fit mx-auto'>PROYECTOS</li></a>
        </ul>
      </div>

      <ContactForm />

      <div className='hidden w-2/3 sm:flex gap-2 mx-auto justify-center py-4'>
            <div className={`bg-customIndigo w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer`}>
                
                <a href="https://www.instagram.com/edgarbp95" target="_blank"><img src={iconInstagram} alt="" /></a>
            </div>
            <a href="https://github.com/edgarbp95?tab=repositories" target="_blank">
            <button className={`bg-customIndigo w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer `}>
                <i className="lni lni-github-original">
                    <img src={iconGithub} alt="" />
                </i>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/edgarbp95/ " target="_blank">
                <button className={`bg-customIndigo w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer`}>
                    <i className="lni lni-linkedin">
                        <img className="linke" src={iconLinkedin} alt="" />
                    </i>
                </button>
            </a>
      </div>

      

    </>
  )
}

export default App2
