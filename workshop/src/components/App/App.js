import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { GlobalStyles } from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

const DEFAULT_ARTIST_ID = "4K7elTMrmeEYTE9w1zGP5e";

const App = () => {
  const dispatch = useDispatch();
  dispatch(requestAccessToken());
  useEffect(() => {
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/artist/:artistId">
            <ArtistRoute />
          </Route>
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
