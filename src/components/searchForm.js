import './searchForm.css'

const SearchForm = props => {

    const handleChange = e => {
        props.setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.getRecommendations()
    }
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                name="searchTerm"
                value={props.searchTerm}
                onChange={handleChange}
                type="search"
            />
            <button 
                className="button button-white" 
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm