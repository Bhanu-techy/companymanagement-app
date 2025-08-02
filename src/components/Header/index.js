import {useState} from 'react'
import {GoSearch} from 'react-icons/go'
import {doctorsList} from '../Data'
import DoctorsList from '../DoctorsList'

import './index.css'

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  const onClickSearchBtn = () => {
    const updatedArray = doctorsList.filter(each =>
      each.specialization.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setSearchResults(updatedArray)
    setSearchInput('')
  }
  console.log(searchResults)

  return (
    <>
      <nav>
        <div>
          <img
            src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1754064924/niroggyanlogo-removebg-preview_i5qjwm.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="searchdiv">
          <input
            type="search"
            onChange={onChangeSearch}
            className="searchInput"
          />
          <button type="button" className="icon" onClick={onClickSearchBtn}>
            <GoSearch size={20} />
          </button>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="home-container">
          <h1 className="search-head">Search Results</h1>
          <ul className="ullist">
            {searchResults.map(each => (
              <DoctorsList key={each.id} details={each} />
            ))}
          </ul>
          <hr />
        </div>
      )}
    </>
  )
}

export default Header
