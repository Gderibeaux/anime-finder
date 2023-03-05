import './App.css'
import AnimeView from "../src/AnimeView/AnimeView"
import Anime from "../src/Anime/Anime"
import { Switch, Route } from "react-router-dom"
import AnimeStatus from "./AnimeStatus/AnimeStatus";
import Error from "../src/Error/Error"
import AnimeGenre from "../src/AnimeGenre/AnimeGenre"
import Action from "./Genres/Action"
import Adventure from "./Genres/Adventure"
import Comedy from "./Genres/Comedy"
import Romance from "./Genres/Romance"
import Fantasy from "./Genres/Fantasy"
import Horror from "./Genres/Horror"
import Mystery from "./Genres/Mystery"
import Sports from "./Genres/Sports"
import CompletedAnimes from "./AnimeStatus/CompletedAnime"
import PlanToWatchAnimes from './AnimeStatus/PlanToWatchAnime'
import RandomAnimeButton from './GetRandom/GetRandom'
import Header from "./Header/Header"


function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={AnimeView} />
        
        <Route path="/status" component={AnimeStatus} />
        <Route exact path="/completed-animes" render={()=> <CompletedAnimes />} />
        <Route exact path="/planned-animes" render={()=> <PlanToWatchAnimes />} />
        <Route exact path="/:animeID" 
render={({match}) => {
  return <Anime animeID={match.params.animeID}/>}}
  />
   <Route path="/random-anime" render={() => <Anime animeID={this.state.anime.mal_id} />} />
        <Route exact path="/genre/action" render={()=> <Action/>} />
        <Route exact path="/genre/adventure" render={()=> <Adventure/>} />
        <Route exact path="/genre/comedy" render={()=> <Comedy/>} />
        <Route exact path="/genre/romance" render={()=> <Romance/>} />
        <Route exact path="/genre/fantasy" render={()=> <Fantasy/>} />
        <Route exact path="/genre/horror" render={()=> <Horror/>} />
        <Route exact path="/genre/mystery" render={()=> <Mystery/>} />
        <Route exact path="/genre/sports" render={()=> <Sports/>} />

      
        <Route path="*" element={<Error />}/>
      </Switch>

    </main>
  );
}

export default App;
