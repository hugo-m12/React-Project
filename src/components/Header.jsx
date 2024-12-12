import React, { useState } from 'react';
import { Link } from 'wouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot, faUser, faMessage, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="text-white bg-cover bg-center relative">
          <Link href="/">
            <img className="logo" src="src/assets/images/logo/logofinal.png" alt="logo" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex justify-end gap-16 p-7 list-none">
            <li>
              <FontAwesomeIcon color="black" icon={faHouse} />
              <Link className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" href="/">
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faLocationDot} />
              <Link className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" href="/AddLocation">
                Add a new location
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faUser} />
              <Link className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" href="/About-me">
                About
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faMessage} />
              <Link className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" href="/Contact">
                Contact
              </Link>
            </li>
          </nav>

          {/* Mobile navigation */}
          <div className="md:hidden flex justify-end items-center p-4 absolute top-0 right-0 z-10">
            {isMenuOpen ? (
              <button onClick={() => setIsMenuOpen(false)}>
                <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
              </button>
            ) : (
              <button onClick={() => setIsMenuOpen(true)}>
                <FontAwesomeIcon icon={faBars} size="2xl" color="black" />
              </button>
            )}
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="fixed inset-x-4 top-0 bottom-0 h-[250px] w-[570px] flex justify-center bg-white shadow-lg z-50 transform translate-y-[40%] transition-transform duration-300 ease-out">
            <ul className="flex flex-col gap-6 p-6 text-black text-lg">
              <li>
                <FontAwesomeIcon icon={faHouse} size="lg" />
                <Link className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" onClick={() => setIsMenuOpen(false)} href="/">
                  Home
                </Link>
              </li>
              <li>
                <FontAwesomeIcon color="black" icon={faLocationDot} size="lg" />
                <Link className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" onClick={() => setIsMenuOpen(false)} href="/AddLocation">
                  Add a new location
                </Link>
              </li>
              <li>
                <FontAwesomeIcon color="black" icon={faUser} size="lg" />
                <Link className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" onClick={() => setIsMenuOpen(false)} href="/About-me">
                  About
                </Link>
              </li>
              <li>
                <FontAwesomeIcon color="black" icon={faMessage} size="lg" />
                <Link className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2" onClick={() => setIsMenuOpen(false)} href="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
