import './index.css'

const SuggestionItem = props => {
  const {details, returnedSearchInput} = props
  const {suggestion, id} = details

  const sendSuggestion = () => {
    console.log(id)
    returnedSearchInput(suggestion)
  }

  return (
    <li className="listContainer">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow" type="button" onClick={sendSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
