import { Link } from "wouter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Header(){
    return (
    <>
    <header>
        <div className="header-container">
            <img className="logo" src="src/assets/images/logo/logofinal.png" alt="logo" /> 
             <nav className="header-menu">  
                <li> <FontAwesomeIcon color="black" icon={faHouse} /> <Link className="menu-links" href="/"> Home </Link> </li>  
                <li> <FontAwesomeIcon color="black" icon={faLocationDot} /> <Link className="menu-links" href="/AddLocation"> Add a new location </Link> </li> 
                <li> <FontAwesomeIcon color="black" icon={faUser} /> <Link className="menu-links" href="/About-me"> About the author </Link> </li> 
             </nav>
        </div>
    </header>
    </>
    )
}


export default Header;