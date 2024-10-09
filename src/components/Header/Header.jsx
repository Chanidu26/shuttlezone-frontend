import React from 'react'
import logo from '../../assets/images/logo.png'
import { useEffect } from 'react'
import { useRef } from 'react'
import {NavLink, Link} from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'

const navLinks= [
  {
    path:'/home',
    display: "Home"
  },
  {
    path: '/courts',
    display: "find court"
  },
  {
    path: '/services',
    display: "services"
  },
  {
    path: '/contact',
    display: "contact"
  }

]
const Header = () => {
  return (<header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
             <div>
              <img src={logo} alt=''/>
             </div>

             <div className='navigation'>
              <ul className='menu flex items-center gap-[2.7rem]'>
                {
                  navLinks.map((link,index)=><li key={index}>
                     <NavLink to={link.path} className={navClass=> navClass.isActive 
                      ? 'text-primaryColor text-[ 16px ] leading-7 font-[600]'
                      : 'text-textColor text-[ 16px ] leading-7 font-[500]'}>{link.display}</NavLink>
                  </li>)
                }
              </ul>
             </div>


             <div className='flex items-center gap-4'>
              <div>
                <Link to = "/">
                   <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                     <img src={userImg} className='w-full rounded-full' alt="" />
                   </figure>
                </Link>
              </div>

              <Link to = "/login">
                    <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                        Login
                    </button>
              </Link>
             </div>

        </div>
        
      </div>
    </header>
  )
}

export default Header