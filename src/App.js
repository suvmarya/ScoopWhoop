import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Meme from "./Components/Meme";
import Quiezzes from './Components/Quiezzes';
import Spotlight from './Components/Spottlight';
import Stories from './Components/Stories';
import Trending from './Components/Trending';
import Videos from './Components/Videos';
// import Navbar from "./Components/Navbar";
import Navbar from "./Navbar/Navbar";
import SignIn from "./Navbar/SignIn";
import Allcategory from './Navbar/Allcategory';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Stories} />
          <Route path="/meme" exact component={Meme} />
          <Route path="/quiezzes" exact component={Quiezzes} />
          <Route path="/spotlight" exact component={Spotlight} />
          <Route path="/trending" exact component={Trending} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/allcategory" exact component={Allcategory} />

          
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
