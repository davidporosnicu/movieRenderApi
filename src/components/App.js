import React from "react";
import Movies from "./Movies";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Movie from "./Movie";
import SearchMovie from "./SearchMovie";
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Movies} />
              <Route exact path="/movie/:id" component={Movie} />
              <Route exact path="/search" component={SearchMovie} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
