import './App.css'
import AnimeView from "../src/AnimeView/AnimeView"
import Anime from "../src/Anime/Anime"
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>TOP ANIMES</h1>
      {/* <Switch> */}
        {/* <Route path="/" element={<AnimeView />} /> */}
        {/* <Route exact path="/genres" element={<AnimeGenre/>} /> */}
        <AnimeView />
        {/* <Route exact path="/:animeID" element={<Anime/>} /> */} 
         {/* <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />}/> */}
    {/* </Switch> */}
    </div>
  );
}

export default App;
