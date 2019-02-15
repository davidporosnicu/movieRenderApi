import React from 'react'
import axios from 'axios'
import queryString from 'query-string'
import MovieList from './MovieList'

class SearchMovie extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      name: '',
      moviesArray: []
    }
  }

  getQueryName () {
    const values = queryString.parse(this.props.location.search)
    return values.name
  }

  componentDidMount () {
    const name = this.getQueryName()
    if (name) {
      this.getApi(name)
    }
  }

  onInputChange = e => {
    this.setState({ name: e.target.value })
  }

  getApi = movie => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1f334378cac29e0294a146e77d2aa505&language=en-US&query=${movie}=1&include_adult=false`
      )
      .then(response => {
        this.setState({ moviesArray: response.data.results })
      })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.history.push({
      pathname: '/search/',
      search: `?name=${this.state.name}`
    })
    this.getApi(this.state.name)
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
              defaultValue={this.getQueryName()}
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
        <MovieList moviesArray={this.state.moviesArray} />
      </div>
    )
  }
}

export default SearchMovie
