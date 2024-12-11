import { Link } from "wouter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

//todo logo not final add tailwind after getting the final logo
function Header(){
    return (
    <>
    <header>
        <div className="text-white bg-cover bg-center">
            <Link href="/" > <img className="logo" src="src/assets/images/logo/logofinal.png" alt="logo" /> </Link> 
             <nav className="flex justify-end gap-16 p-7 list-none">  
                <li> <FontAwesomeIcon color="black" icon={faHouse} /> <Link className="text-gray-500 no-underline transition-colors duration-300 hover:text-black hover:underline" href="/"> Home </Link> </li>  
                <li> <FontAwesomeIcon color="black" icon={faLocationDot} /> <Link className="text-gray-500 no-underline transition-colors duration-300 hover:text-black hover:underline" href="/AddLocation"> Add a new location </Link> </li> 
                <li> <FontAwesomeIcon color="black" icon={faUser} /> <Link className="text-gray-500 no-underline transition-colors duration-300 hover:text-black hover:underline" href="/About-me"> About </Link> </li> 
                <li> <FontAwesomeIcon color="black" icon={faMessage} /> <Link className="text-gray-500 no-underline transition-colors duration-300 hover:text-black hover:underline" href="/Contact"> Contact </Link> </li> 
             </nav>
        </div>
    </header>
    </>
    )
}


export default Header;