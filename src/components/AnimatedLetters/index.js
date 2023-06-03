import './index.scss'

const AnimatedLetters = ({ letterClass, stringArray, index }) => {
    return (
        <span>
            {stringArray.map((item, i) => (
                <span key={item + i} className={`${letterClass} _${i + index}`}>
                    {item}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters
