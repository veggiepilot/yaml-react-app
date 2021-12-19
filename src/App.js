import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/header';
import SearchForm from './components/searchForm'
import API from './utils/API'
import Spinner from './components/spinner'

function App() {
  const [searchTerm, setSearchTerm] = useState('Tame Impala')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRecommendations()
  }, [])

  const getRecommendations = async () => {
    setLoading(true)
    try {
      const results = await API.getRecommendations(searchTerm)
      console.log(results)
    } catch (err) {
      alert(err)
    }
    setLoading(false)
  }


  return (
    <>
      <Header>
        <SearchForm 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
      </Header>
      <div className="container">
        { loading ? <Spinner /> : null }
      </div>
    </>
  );
}

export default App;
