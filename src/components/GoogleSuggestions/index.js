import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchedValue: '',
  }

  searchedItems = event => {
    this.setState({
      searchedValue: event.target.value,
    })
  }

  updateSearchValue = value => {
    this.setState({searchedValue: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchedValue} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchedValue.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="searchingContainer">
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchLogo"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.searchedItems}
              value={searchedValue}
              className="inputValue"
            />
          </div>
          <ul className="resultContainer">
            {searchResults.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                key={eachItem.id}
                suggested={this.updateSearchValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
