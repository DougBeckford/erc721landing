import {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import {ImSun} from 'react-icons/im'
import {BsFillMoonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({changeTheme,currentTheme}) => {
        const [navState,setNavState] = useState(false);
        return (
        <nav>
                <div className="brand-container">
                        <div className="brand">
                                <Link to="/">
                                        <img src={logo} alt="lingo" />
                                </Link>
                        </div>
                        <div className="toggle-container">
                                <div className="toggle">
                                        {navState ? <MdClose onClick={()=>setNavState(false)}/> : <GiHamburgerMenu onClick={()=>setNavState(true)}/>}
                                </div>
                                <div className="mode" onClick={changeTheme}>
                                        {currentTheme === "dark" ? <ImSun className='light'/> : <BsFillMoonFill className='dark'/>}
                                </div>
                        </div>
                </div>
                <div className={`links-container ${navState ? "nav-visible" : ""}`}>
                        <ul className="links">
                                        <li> <Link to="/roadmap">Roadmap</Link> </li>
                                        
                                <li> <a href="/#">About</a> </li>
                                <li> <a href="/#">Launch</a> </li>
                                <li> <a href="/#">SignUp</a> </li>
                                <li onClick={changeTheme}>{currentTheme === "dark" ? <ImSun className='light'/> : <BsFillMoonFill className='dark'/>}</li>
                        </ul>
                </div>
        </nav>
        );
}
export default Navbar;