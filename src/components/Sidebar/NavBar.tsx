import { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import { IconContext } from 'react-icons';
import SignIn from '../Signin/signin';
import './NavBar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
         <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <h1><GiHamburger/>Food Crawl<IoPizzaOutline/></h1>
                <SignIn />
                </div>
            
 
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index ) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                                
                            </li>
                            
                        )
                        
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;