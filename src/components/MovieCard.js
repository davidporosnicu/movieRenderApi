import React from 'react'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render () {
    const { details } = this.props
    return (
      <div className='ui raised very padded text container segment'>
        <h2 className='ui header'>{details.title}</h2>
        <p>{details.overview}</p>

        <Link
          className='right floated ui black basic button'
          to={'/movie/' + details.id}
        >
          View
        </Link>
      </div>
    )
  }
}

export default MovieCard
