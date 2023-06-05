import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoD from '../../assets/images/golden.png'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'n', 'y', 's']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass}`}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoD} className="letter-d" alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={nameArray}
                        index={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={jobArray}
                        index={22}
                    />
                </h1>
                <h2>Frontend Developer / JavaScript / React</h2>
                <Link to="/contact" className="flat-button">
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default Home
