import { useState } from 'react'
import './App.css';
import Header from './components/header';
import SearchForm from './components/searchForm'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Header>
        <SearchForm 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
      </Header>
    </>
  );
}

export default App;
