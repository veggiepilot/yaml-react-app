import './iframe.css'

const Iframe = props => {
    return (
        <div className="iframe-container">
            <iframe src={props.src} title={props.title} className="responsive-iframe" />
        </div>
    )
}

export default Iframe