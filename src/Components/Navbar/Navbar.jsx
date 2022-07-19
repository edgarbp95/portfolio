
import MenuHamburguer from "./MenuHamburguer"
import logocubo from "/src/Images/Cubo.png"

const Navbar = ({addClass,openMenu,active}) => {

      
    
  return (
    <div className={`${addClass} w-full flex px-52 py-8 justify-between z-50 sm:px-4  `} >
        <div className='flex flex-col '>
            <p className='text-2xl sm:text-xl font-bold tracking-widest text-white'>EDGAR BUENAÑO</p>
            <span className='text-sm tracking-widest font-light text-white sm:text-xs'>FRONT-END DEVELOPER</span>
        </div>
        <div className='flex'>
            <ul className='flex gap-20 text-base text-white font-normal nav_menu items-center sm:hidden'>
                <li className='cursor-pointer nav_menu_option relative pb-2'>SOBRE MI</li>
                <li className='cursor-pointer nav_menu_option relative pb-2'>PROYECTOS</li>
                <li className='cursor-pointer nav_menu_option relative pb-2'>CONTACTO</li>
            </ul>
        </div>
        
        <MenuHamburguer openMenu={openMenu} active={active}/>


      
    </div>
  )
}

export default Navbar
