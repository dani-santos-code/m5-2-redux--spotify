import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { GlobalStyles } from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute";

const DEFAULT_ARTIST_ID = "4K7elTMrmeEYTE9w1zGP5e";

const App = ({ id }) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/artists/:id">
            {id ? (
              <ArtistRoute />
            ) : (
              <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
