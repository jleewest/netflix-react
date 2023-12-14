import './App.css';
import logo from './assets/title-logo.png';
import Dashboard from './Dashboard.jsx';
import SearchBar from './SearchBar.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState(null);
  const [myList, setMyList] = useState([]);

  function toggleList(movie) {
    if (myList.includes(movie)) {
      setMyList(myList.filter((a) => a !== movie));
    } else {
      setMyList((currentList) => [...currentList, movie]);
    }
  }

  useEffect(() => {
    const apiUrl =
      'http://cw-api.eu-west-3.elasticbeanstalk.com/movied/discover';
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('No API response');
      })
      .then((json) => setMovies(json));
  }, []);

  return (
    <div className='App'>
      <nav>
        <img src={logo} alt='netflix-title-logo' id='logo' />
        <SearchBar movies={movies} myList={myList} toggleList={toggleList} />
      </nav>
      <div className='body'>
        <Dashboard movies={movies} toggleList={toggleList} myList={myList} />
      </div>
    </div>
  );
}
