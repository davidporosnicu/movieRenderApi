import React from 'react'
import Movies from './Movies'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Error'
import Movie from './Movie'
import SearchMovie from './SearchMovie'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route exact path='/movie/:id' component={Movie} />
            <Route exact path='/search' component={SearchMovie} />
            <Route
              exact
              path='/search/:movie'
              name='movie'
              component={SearchMovie}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
