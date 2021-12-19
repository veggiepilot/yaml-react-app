import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/header';
import SearchForm from './components/searchForm'
import API from './utils/API'
import Spinner from './components/spinner'
import Info from './components/info'
import Gallery from './components/gallery'
import Sidebar from './components/sidebar'

function App() {
  const [searchTerm, setSearchTerm] = useState('Tame Impala')
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState(null)
  const [results, setResults] = useState([])
  const [saved, setSaved] = useState([])

  useEffect(() => {
    getRecommendations()
  }, [])

  const getRecommendations = async () => {
    setLoading(true)
    try {
      const results = await API.getRecommendations(searchTerm)
      if(results?.data?.Similar?.Info && results.data.Similar.Info.length > 0) {
        setInfo(results.data.Similar.Info[0])
      }
      if(results?.data?.Similar?.Results) {
        setResults(results.data.Similar.Results)
      }
    } catch (err) {
      alert(err)
    }
    setLoading(false)
  }

  const addToSaved = data => {
    const updatedArray = [...saved, data]
    setSaved(updatedArray)
  }

  return (
    <>
      <Header>
        <SearchForm 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          getRecommendations = {getRecommendations}
        />
      </Header>
        <div className="row">
          <div className="column column-20">
            <Sidebar />
          </div>
          <div className="column column-80">
            <div className="container">

              <pre>{JSON.stringify(saved, null, 2)}</pre>
              { loading ? <Spinner /> : (
                <>
                  <Info info={info}/>
                  <Gallery results={results} addToSaved={addToSaved}/>
                </>
              ) }
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
