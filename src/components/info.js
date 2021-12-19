import Iframe from './iframe'

const Info = props => {
    const { info } = props
    const { Name, wTeaser, wUrl, yUrl } = info
    return (
        <div className="row">
            {yUrl && (
                <div className="column">
                    <Iframe src={yUrl}/>
                </div>
            )}
            <div className="column">
                <h2>You searched: {Name}</h2>
                <p>{wTeaser}</p>
                <a 
                    href={wUrl} 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="button"
                >
                    LEARN MORE
                </a>
            </div>
        </div>
    )
}

export default Info