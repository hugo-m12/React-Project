import React, { useState } from "react";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faUser,
  faMessage,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="text-white bg-cover bg-center">
          <Link href="/">
            <img
              className="logo hidden md:block"
              src="src/assets/images/logo/logofinal.png"
              alt="logo"
            />
          </Link>

          <nav className="hidden md:flex justify-end gap-16 p-7 list-none ">
            <li>
              <FontAwesomeIcon color="black" icon={faHouse} />
              <Link
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faLocationDot} />
              <Link
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                href="/AddLocation"
              >
                Add a new location
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faUser} />
              <Link
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                href="/About-me"
              >
                About
              </Link>
            </li>
            <li>
              <FontAwesomeIcon color="black" icon={faMessage} />
              <Link
                className="text-gray-400 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                href="/Contact"
              >
                Contact
              </Link>
            </li>
          </nav>

          <div className="md:hidden flex items-center pr-4 absolute top-0 right-0 z-50 transition-all duration-300 ease-in-out">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "opacity-80 scale-105 transform-gpu"
                  : "opacity-100 scale-100"
              }`}
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                size="2xl"
                className="text-black transition-colors duration-300 ease-in-out"
              />
            </button>
          </div>
          
          {isMenuOpen && ( // ajust this in mobile later
            <div 
              className={`md:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out`}
              style={{ zIndex: isMenuOpen ? '50' : '-1' }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '45%',
                  left: '47%',
                  transform: 'translate(-70%, -70%)',
                  width: '100vw',
                  maxWidth: '400px',
                  maxHeight: '90vh',
                }}
              >
                <div className="bg-white rounded-lg shadow-xl transform-gpu transition-all duration-300 ease-in-out">
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <nav>
                    <ul className="flex flex-col gap-8 p-8 text-black text-lg text-center">
                      <li>
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                        <Link
                          className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                          onClick={() => setIsMenuOpen(false)}
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon color="black" icon={faLocationDot} size="lg" />
                        <Link
                          className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                          onClick={() => setIsMenuOpen(false)}
                          href="/AddLocation"
                        >
                          Add a new location
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon color="black" icon={faUser} size="lg" />
                        <Link
                          className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                          onClick={() => setIsMenuOpen(false)}
                          href="/About-me"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon color="black" icon={faMessage} size="lg" />
                        <Link
                          className="text-gray-600 no-underline transition-colors duration-300 hover:text-black hover:underline ml-2"
                          onClick={() => setIsMenuOpen(false)}
                          href="/Contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
