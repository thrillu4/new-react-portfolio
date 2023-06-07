import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const Social = ({ className }) => {
    return (
        <div className={`social ${className}`}>
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
        </div>
    )
}

export default Social
