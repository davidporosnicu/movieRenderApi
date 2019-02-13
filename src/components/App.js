import React from 'react';
import Movies from './Movies';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = { moviesArray: [] }
  }
  
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505')
    .then(response => {
      this.setState({moviesArray: response.data.results})
      console.log(this.state.moviesArray);
    })
  }

  render(){
    return(
      <div className="ui container"><Movies moviesArray={this.state.moviesArray}/></div>
    );
  }
}

export default App;