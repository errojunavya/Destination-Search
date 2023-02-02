// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    console.log(destinationsList)

    const searchResults = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              value={searchInput}
              className="input-text"
              onChange={this.onSearchDestination}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(item => (
              <DestinationItem key={item.id} destinationDetails={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
