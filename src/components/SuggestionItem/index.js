import './index.css'

const SuggestionItem = props => {
  const {details, suggested} = props

  const changeValue = () => {
    suggested(details.suggestion)
  }

  return (
    <li className="list">
      <button type="button" className="searchItems" onClick={changeValue}>
        <p className="suggestions">{details.suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowLogo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
