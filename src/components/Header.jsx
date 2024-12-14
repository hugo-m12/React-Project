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

          <div className="md:hidden flex justify-end items-center p-4 absolute top-0 right-0 z-50 transition-all duration-300 ease-in-out">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-all duration-300 ease-in-out ${
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

          {isMenuOpen && (
            <div className="md:hidden fixed inset-x-4 top-0 bottom-0 h-[250px] w-[570px] flex justify-center bg-white shadow-lg z-50 transform translate-y-[40%] transition-transform duration-300 ease-out">
              <Link href="/">
                <img
                  className="logo flex left-8 top-16"
                  src="src/assets/images/logo/logofinal.png"
                  alt="logo"
                />
              </Link>
              <ul className="flex flex-col gap-6 p-6 text-black text-lg">
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
                  <FontAwesomeIcon
                    color="black"
                    icon={faLocationDot}
                    size="lg"
                  />
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
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
