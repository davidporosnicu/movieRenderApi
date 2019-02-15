import React from 'react'
import axios from 'axios'
// import queryString from 'query-string'
import MovieList from './MovieList'

class SearchMovie extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      name: '',
      moviesArray: []
    }
  }

  componentDidMount () {
    if (this.props.location.key) {
      this.getApi()
    }
  }

  onInputChange = e => {
    this.setState({ name: e.target.value })
  }

  getApi = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1f334378cac29e0294a146e77d2aa505&language=en-US&query=${
          this.props.location.key
            ? this.props.match.params.movie
            : this.state.name
        }=1&include_adult=false`
      )
      .then(response => {
        this.setState({ moviesArray: response.data.results })
      })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.name}`)
    this.getApi()
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
              defaultValue={
                this.props.location.key
                  ? this.props.match.params.movie
                  : this.state.name
              }
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
