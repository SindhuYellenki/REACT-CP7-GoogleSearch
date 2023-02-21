import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchInputValue = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  returnedSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {suggestionsList} = this.props
    const searchInputResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchInputResults)

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            className="image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-list-Container">
            <img
              className="searchIcon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.searchInputValue}
              value={searchInput}
            />
          </div>
          <ul>
            {searchInputResults.map(each => (
              <SuggestionItem
                details={each}
                key={each.id}
                returnedSearchInput={this.returnedSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
