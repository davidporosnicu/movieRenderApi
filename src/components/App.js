import React from 'react'
import Movies from './Movies'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Error'
import Movie from './Movie'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Movies} />
            <Route exact path='/movie/:id' component={Movie} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
