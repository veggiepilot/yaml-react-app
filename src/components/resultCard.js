import './resultCard.css'
import { FaSave} from 'react-icons/fa'

const ResultCard = ({ Name, wTeaser, wUrl, yUrl, addToSaved}) => {

    const handleClick = () => {
        addToSaved({
            Name, 
            wTeaser,
            wUrl, 
            yUrl
        })
    }
    return (
    <div className="card">
        <h4>{Name}</h4>
        {wUrl && (
            <a 
                href={wUrl} 
                target="_blank" 
                rel="noreferrer noopener"
            >
                LEARN MORE
            </a>
        )}
        <button onClick = {handleClick} className="button">
            <FaSave />Save for later
        </button>
    </div>
    )
}

export default ResultCard