import './App.css';
import React, {useState, useEffect }from 'react';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import { getNowPlaying, getPopular, getTopRated } from './helper/fetch';

function App() {
  const [popular, SetPopular] = useState([])
  const [topRated, SetTopRated] = useState([])
  const [nowPlaying, SetNowPlaying] = useState([])

  useEffect(()=>{
    (async ()=> {
      const movies = await getPopular();
      SetPopular(movies);
      const moviesTopRated = await getTopRated();
      SetTopRated(moviesTopRated);
      const moviesNowPlaying = await getNowPlaying();
      SetNowPlaying(moviesNowPlaying);
      console.log(moviesNowPlaying);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Slider />

            {/*popular.results &*/ nowPlaying.results /*& topRated.results*/ &&

               <Body peliculas={popular.results} peliculas2={topRated.results} peliculas3={nowPlaying.results} tipoPelis='Lo + popular' type='popular' />
                
                
            }
            <Footer />
    </div>
  );
}
export default App;
