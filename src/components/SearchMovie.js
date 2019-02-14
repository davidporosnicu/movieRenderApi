import React from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

class SearchMovie extends React.PureComponent {
  constructor () {
    super()
    this.state = { name: '', moviesArray: [], toggle: 0 }
  }

  onInputChange = e => {
    this.setState({ name: e.target.value })
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1f334378cac29e0294a146e77d2aa505&language=en-US&query=${
          this.state.name
        }=1&include_adult=false`
      )
      .then(response => {
        this.setState({ moviesArray: response.data.results })
        this.setState({ toggle: 0 })
      })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.setState({ toggle: 1 })
  }

  render () {
    return (
      <div className='ui container'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <br />
            <label>Movie Search</label>
            <input
              type='text'
              placeholder='Type a movie'
              value={this.state.name}
              onChange={this.onInputChange}
            />
            <br />
            <br />
            <button className='right floated ui black basic button'>
              Seach Movie
            </button>
            <br />
            <br />
          </div>
        </form>
        <div>
          <ul style={{ listStyleType: 'none' }}>
            {this.state.moviesArray.map(movie => (
              <li key={movie.id}>
                {this.state.toggle === 1 && this.state.name !== '' ? (
                  <MovieCard details={movie} />
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchMovie
