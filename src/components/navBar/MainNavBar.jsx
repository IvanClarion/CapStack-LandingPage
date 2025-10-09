import React from 'react'
import { NavLink } from 'react-router'
import Logo from '../../assets/images/logo.svg'
import { MoveRight } from 'lucide-react'
function mainBar() {
  return (
    <aside className='m-2 sticky z-20 top-2'>
        <nav>
            <ul>
            <figure className='logo'>
                <img src={Logo} alt="" />
                <label className='hidden lg:block'>CapStack</label>
            </figure>
            <NavLink href='https://capstack.netlify.app/'>
                <li>Get Started <MoveRight/></li>
            </NavLink>
            </ul>
        </nav>
    </aside>
  )
}

export default mainBar
