import React, { useState } from 'react'
import iconSocialMedia from "/src/Images/social-media.png"
import iconInstagram from "/src/Images/instagram-original.svg"
import iconGithub from "/src/Images/github-original.svg"
import iconLinkedin from "/src/Images/linkedin.svg"


const SocialMenu = () => {

    const [menuActive,setMenuActive] = useState(false)

    const openSocialMenu = ()=>{
        setMenuActive(!menuActive)
    }

  return (
    <div className="social-menu sm:hidden">
        <div className="prueba">
            <div className={`hambur bg-customIndigo ${menuActive ? "active" : ""}`} onClick={openSocialMenu}>
                <div>
                    {menuActive ?  
                    <div className='hambur bg-customIndigo'>
                        <div className="bg-white hambur-1 menu-hambur aparecer" />
                        <div className="bg-white hambur-2 menu-hambur aparecer" />
                        <div className="bg-white hambur-3 menu-hambur aparecer" />
                    </div> 

                        : <img className='w-9' src={iconSocialMedia} alt="" />
                    }
                </div>
                {/*  */}
            </div>
            <div className={`bg-customIndigo social instagram ${menuActive ? "open-insta" : "close-insta"}`}>
                
                <a href="https://www.instagram.com/edgarbp95" target="_blank"><img src={iconInstagram} alt="" /></a>
            </div>
            <a href="https://github.com/edgarbp95?tab=repositories" target="_blank">
            <button className={`bg-customIndigo social github ${menuActive ? "open-github" : "close-github"}`}>
                <i className="lni lni-github-original">
                    <img src={iconGithub} alt="" />
                </i>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/edgarbp95/ " target="_blank">
                <button className={`bg-customIndigo social linkedin ${menuActive ? "open-linkedin" : "close-linkedin"}`}>
                    <i className="lni lni-linkedin">
                        <img className="linke" src={iconLinkedin} alt="" />
                    </i>
                </button>
            </a>
        </div>
    </div>

  )
}

export default SocialMenu
