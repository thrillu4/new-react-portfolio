import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    faHome,
    faUser,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import LogoD from '../../assets/images/golden.png'
import './index.scss'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img className="sub-logo" src={LogoD} alt="thrill" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    size="3x"
                    color="#ffd700"
                    className="close-icon"
                />
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/denis-kraevoy/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/thrillu4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/real_thrill"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/thrillinst/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                size="3x"
                color="#ffd700"
                className="hamburger-icon"
            />
        </div>
    )
}

export default Sidebar
