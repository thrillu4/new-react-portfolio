import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((item, i) => {
                    return (
                        <div className="image-box" key={i}>
                            <img
                                src={item.cover}
                                className="portfolio-image"
                                alt="portfolio"
                            />
                            <div className="content">
                                <p className="title">{item.title}</p>
                                <h4 className="description">
                                    {item.description}
                                </h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(item.url)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={'Portfolio'.split('')}
                        index={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio
