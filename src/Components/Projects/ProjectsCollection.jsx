import React, { useEffect, useRef, useState } from 'react'
import Project from './Project'




const ProjectsCollection = () => {

  const projectsArray = [
      {
        id:1,
        title:"Ecommerce React/TailwindsCSS",
        vercel:"https://ecommerce2-mu.vercel.app/",
        img:"https://i.ibb.co/5LHmmwn/ecommerce.png",
        repository:"https://github.com/edgarbp95/ecommerce"
      },
      {
        id:2,
        title:"Rick and Morty APP",
        vercel:"https://rick-morty-app-five.vercel.app/",
        img:"https://i.ibb.co/T264hY8/rick-morty-project.jpg",
        repository:"https://github.com/edgarbp95/rick-morty-app"
      },
      {
        id:3,
        title:"Soriet Landing",
        vercel:"https://soriet-graphic-design.vercel.app/",
        img:"https://i.ibb.co/PNZ0cFB/soriet-landing.png",
        repository:"https://github.com/edgarbp95/LandingSoriet"
      },
      {
        id:4,
        title:"TodoList + PokeAPI",
        vercel:"https://nucba-react-ej1-todolist.vercel.app/",
        img:"https://i.ibb.co/VBp0gD0/todolist-pokeapi.jpg",
        repository:"https://github.com/edgarbp95/NucbaReactEj"
      },
      {
        id:5,
        title:"Efecto Maquina de Escribir",
        vercel:"https://desafios-3-efecto.vercel.app/",
        img:"https://i.ibb.co/Gk1rVJ4/Instant-Gif-2022-07.gif",
        repository:"https://github.com/edgarbp95/Desafios_3/blob/main/ejercicio%20js/app.js"
      },
      {
        id:6,
        title:"Launch Countdown Timer",
        vercel:"https://launch-countdown-timer-mocha.vercel.app/",
        img:"https://i.ibb.co/5W6r46y/launch-countdown-timer.jpg",
        repository:"https://github.com/edgarbp95/Launch-countdown-timer"
      },
      {
        id:7,
        title:"Juego Tic Tac Toe",
        vercel:"https://tic-tac-toe-three-rouge.vercel.app/",
        img:"https://i.ibb.co/mNd11h2/juego-tic-tac-toe.jpg",
        repository:"https://github.com/edgarbp95/frontendmentor_js"
      },
      {
        id:8,
        title:"Juego Memoria",
        vercel:"https://juego-memoria-pi.vercel.app/",
        img:"https://i.ibb.co/yNbzffq/juego-memoria.jpg",
        repository:"https://github.com/edgarbp95/juegoMemoria"
      },
      {
        id:9,
        title:"Juego Adivina la Palabra",
        vercel:"https://juego-ahorcado-ten.vercel.app/",
        img:"https://i.ibb.co/5MTvQrw/juego-adivinando.jpg",
        repository:"https://github.com/edgarbp95/juegoAhorcado"
      },
      {
        id:10,
        title:"Reporte de Actividad",
        vercel:"https://frontendmentor-js.vercel.app/",
        img:"https://i.ibb.co/2hqmbww/report-time.jpg",
        repository:"https://github.com/edgarbp95/frontendmentor_js"
      },
      {
        id:11,
        title:"Landing con barra de navegación",
        vercel:"https://intro-section-with-dropdown-navigation-main-jade.vercel.app/",
        img:"https://i.ibb.co/R26B7mx/landing-barra-navegacion.jpg",
        repository:"https://github.com/edgarbp95/intro-section-with-dropdown-navigation-main"
      },
      {
        id:12,
        title:"Encuesta de satisfacción",
        vercel:"https://frontendmentor-js-1.vercel.app/",
        img:"https://i.ibb.co/jw3bRk9/encuesta-satisfaccion.jpg",
        repository:"https://github.com/edgarbp95/frontendmentor_jsa"
      },
      {
        id:13,
        title:"Landing Page Yo Adopto",
        vercel:"https://desafios-3-landing.vercel.app/",
        img:"https://i.ibb.co/zSrGpZx/landing-yo-adopto.png",
        repository:"https://github.com/edgarbp95/Desafios_3/tree/main/LANDING%20NUCBA%202"
      },
      {
        id:14,
        title:"FAQ Acordion",
        vercel:"https://desafios-4-js.vercel.app/",
        img:"https://i.ibb.co/5hqvxd1/FAQ-acordion.png",
        repository:"https://github.com/edgarbp95/Desafios_4/tree/main/faq-accordion-card-main"
      },
      {
        id:15,
        title:"Card vista previa",
        vercel:"https://desafios-4-art.vercel.app/",
        img:"https://i.ibb.co/bKh9nqj/card-vista-previa.png",
        repository:"https://github.com/edgarbp95/Desafios_4/tree/main/article-preview-component-master"
      },
      {
        id:16,
        title:"Landing page ejemplo",
        vercel:"https://desafios-nucba-landing-frontendmentor.vercel.app/",
        img:"https://i.ibb.co/Y02wLVr/landing-page-ejemplo.png",
        repository:"https://github.com/edgarbp95/Desafios_NUCBA/tree/main/clipboard-landing-page-master"
      },
      {
        id:17,
        title:"Landing Chat APP Design",
        vercel:"https://desafios-2-chat-app.vercel.app/",
        img:"https://i.ibb.co/FD2qTTS/chat-app-design.png",
        repository:"https://github.com/edgarbp95/desafios_2/tree/main/chat-app-css-illustration-master"
      },
      {
        id:18,
        title:"NFT Card Equilibrium",
        vercel:"https://desafios-2.vercel.app/",
        img:"https://i.ibb.co/CKjBr62/NFT-CARD.pngg",
        repository:"https://github.com/edgarbp95/desafios_2/tree/main/nft-preview-card-component-main"
      },
      {
        id:19,
        title:"Landing Page Ejemplo",
        vercel:"https://desafios-2-challenge.vercel.app/",
        img:"https://i.ibb.co/0tnM9BN/landing-page-huddle.png",
        repository:"https://github.com/edgarbp95/desafios_2/tree/main/huddle-landing-page-with-single-introductory-section-master"
      }
  ]

  const refs = useRef(projectsArray.map(() => React.createRef()));

  const collectionRef = useRef()

  const [showCollection,setShowCollection] = useState(false)
  const [heightState,setHeightState] = useState()


  console.log(collectionRef)

      const showGallery = ()=>{
                
        setShowCollection(!showCollection)
        
      }

    useEffect(() => {
        console.log("cambio el showCollection")
    }, [showCollection]);


      console.log(showCollection)


   
  return (
    <>
      
      <div className={`w-full  mx-auto mt-2 justify-center pb-32 border p-16 rounded-2xl sm:rounded-none bg-customIndigoLight relative overflow-hidden ${showCollection ? "open-collection" : "close-collection" } sm:w-full sm:py-10 sm:px-4`} ref={collectionRef}>
        <h2 className='text-3xl font-semibold text-white z-10 text-center mb-8 tracking-widest sm:text-xl md:text-2xl'>MIS PROYECTOS</h2>
        <div className='project-grid gap-6 sm:gap-7 sm:hidden' >

          {projectsArray.map((item,i)=>(
            <Project key={item.id} refe={refs.current[i]} tittle={item.title} web={item.vercel} github={item.repository} img={item.img}/>
            ))}

        </div>

        <div className='hidden w-full overflow-x-scroll sm:flex gap-6'>
          {projectsArray.map((item,i)=>(
            <Project key={item.id} refe={refs.current[i]} tittle={item.title} web={item.vercel} github={item.repository} img={item.img}/>
            ))}

        </div>

        <button className='absolute bottom-2 right-8 text-white font-medium animate-pulse cursor-pointer sm:hidden'
        onClick={showGallery}
        >{showCollection ? "Ocultar" : "Ver todos"}</button>
      </div>
    </>
   
  )
}

export default ProjectsCollection
