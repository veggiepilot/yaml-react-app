const Info = props => {
    const { info } = props
    const { Name, wTeaser, wUrl, yUrl } = info
    return (
        <div className="row">
            {yUrl && (
                <div className="column">
                    <iframe src={yUrl}/>
                </div>
            )}
            <div className="column">
                <h2>You searched: {Name}</h2>
                <p>{wTeaser}</p>
            </div>
        </div>
    )
}

export default Info