import React from 'react'
import axios from 'axios'

import BookCards from './bookCards'
//'cheeses' equivolent in cheesebored 

//list of music/albums
class CultureBooks extends React.Component {

  constructor() {
    super()
    this.state = {
      cultureBData: []
    }
  } 

  componentDidMount() {
    axios.get(('/api/culture-books'))
      .then(res => this.setState({ cultureBData: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return <div className='flex flex-wrap justify-around mr6 ml6 mb5'>
      <h1 className="helvetica b f1 ml3 mt6 mb5 tc w-100">After a good read?</h1>
      {this.state.cultureBData.map((book, i) => {
        return <BookCards key={i} book={book}/>
      })}
    </div>

  }
}


export default CultureBooks
