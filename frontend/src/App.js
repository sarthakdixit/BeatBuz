import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Explore from './containers/Explore'
import Library from './containers/Library'
import Artists from './containers/Artists'
import Search from './containers/Search' 
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import Activate from "./containers/Activate";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import { Provider } from "react-redux";
import store from "./store";
import Player from './containers/Player';
import MoodAndGenre from "./containers/MoodAndGenre";
import SpecificArtist from './containers/SpecificArtist';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/all_artists" component={Artists} />
        <Route exact path="/specific/artist/:id" component={SpecificArtist} />
        <Route exact path="/search/:pk" component={Search} />
        <Route exact path="/mood_genre/:mg" component={MoodAndGenre} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
        <Route exact path="/activate/:uid/:token" component={Activate} />
        <Route exact path="/song/player/:id" component={Player} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
