import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App';
import Movie from './components/Movie';
import Error from './components/Error';



render(
  <BrowserRouter>
    <div>
      <Switch >
        <Route exact path="/" component={App} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route component={Error}/>
      </Switch>
    </div>
  </BrowserRouter>
 , document.querySelector('#root')
)