import ResultCard from './resultCard'
import './gallery.css'

const Gallery = props => {
    return (
        <div className="gallery">
            {props.results.map(result => {
            return (
                <ResultCard 
                {...result} 
                addToSaved={props.addToSaved}
                key={result.Name}
                />
            )
            })}
        </div>
    )
}

export default Gallery