import { Link } from "wouter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Header(){
    return (
    <>
    <header>
        <div className="header-container">
            <Link href="/" > <img className="logo" src="src/assets/images/logo/logofinal.png" alt="logo" /> </Link>
             <nav className="header-menu">  
                <li> <FontAwesomeIcon color="black" icon={faHouse} /> <Link className="menu-links" href="/"> Home </Link> </li>  
                <li> <FontAwesomeIcon color="black" icon={faLocationDot} /> <Link className="menu-links" href="/AddLocation"> Add a new location </Link> </li> 
                <li> <FontAwesomeIcon color="black" icon={faUser} /> <Link className="menu-links" href="/About-me"> About </Link> </li> 
                <li> <FontAwesomeIcon color="black" icon={faMessage} /> <Link className="menu-links" href="/Contact"> Contact </Link> </li> 
             </nav>
        </div>
    </header>
    </>
    )
}


export default Header;