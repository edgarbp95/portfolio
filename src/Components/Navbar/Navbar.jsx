
import MenuHamburguer from "./MenuHamburguer"
import logocubo from "/src/Images/Cubo.png"

const Navbar = ({addClass,openMenu,active}) => {

      
    
  return (
    <div className={`${addClass} clase-prueba-2 sm:w-full md:w-full mx-auto flex py-8 justify-between z-50 sm:px-4 md:px-10`} >
      
        <div className='flex flex-col '>
            <p className='text-2xl sm:text-xl md:text-xl font-bold tracking-widest text-white'>EDGAR BUENAÑO</p>
            <span className='text-sm tracking-widest font-light text-white sm:text-xs md:text-xs'>FRONT-END DEVELOPER</span>
        </div>
        <div className='flex'>
            <ul className='flex gap-20 text-base text-white font-normal nav_menu items-center sm:hidden'>
                <a className="no-underline hover:no-underline hover:text-white" href="#about"><li className='cursor-pointer nav_menu_option relative pb-2'>SOBRE MI</li></a>
                <a className="no-underline hover:no-underline hover:text-white" href="#projects"><li className='cursor-pointer nav_menu_option relative pb-2'>PROYECTOS</li></a>
                <a className="no-underline hover:no-underline hover:text-white" href="#contact"><li className='cursor-pointer nav_menu_option relative pb-2'>CONTACTO</li></a>
            </ul>
        </div>
      
        
        <MenuHamburguer openMenu={openMenu} active={active}/>


      
    </div>
  )
}

export default Navbar
