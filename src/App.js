import './App.css'
import AnimeView from "../src/AnimeView/AnimeView"
import Anime from "../src/Anime/Anime"
import { Switch, Route } from "react-router-dom"
import AnimeStatus from './AnimeStatus/AnimeStatus';
import Error from "../src/Error/Error"

function App() {
  return (
    <div className="App">
      <h1>TOP ANIMES</h1>
      <Switch>
        <Route exact path="/" component={AnimeView} />
        <Route exact path="/:animeID" component={Anime} />
        <Route exact path="/:animeID/status" component={AnimeStatus} />
        <Route path="*" element={<Error />}/>
      </Switch>

    </div>
  );
}

export default App;
