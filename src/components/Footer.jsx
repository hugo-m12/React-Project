import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer(){
    return (
    <>
        <footer className="footer"> 
            <nav> 
            <p> Copyright © 2024 | All Rights Reserved </p> <a href='/About-me' className='icon-social'> About the Author </a>  
                <div className="socialmedia">
                   <a className='icon-social' href='https://www.instagram.com/shots_by_hugomoreira/' rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="fa-2xl" icon={faInstagram} />
                    </a> 
                    <a className='icon-social' href='https://www.linkedin.com/in/hugo-moreira-9889a9261/' rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
                    </a>
                    <a className='icon-social' href='https://github.com/hugo-m12' rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="fa-2xl" icon={faGithub} />
                    </a>
                </div>
            </nav>
        </footer>
    </>
    )
}

export default Footer;