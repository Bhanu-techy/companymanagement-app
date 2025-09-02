import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './index.css'

function CustomerForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const {id} = useParams()
  console.log(id)

  const onChangeFirstName = event => setFirstName(event.target.value)

  const onChangeLastName = event => setLastName(event.target.value)
  const onChangeNumber = event => setPhone(event.target.value)

  const onAddDetails = event => {
    event.preventDefault()
    const userDetails = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
    }
  }

  return (
    <div className="form-container">
      <form>
        <h1 className="form-heading">Add Details</h1>
        <div className="input-div">
          <label htmlFor="first_name">Enter First Name</label>
          <input
            type="text"
            id="first_name"
            onChange={onChangeFirstName}
            value={firstName}
          />
        </div>
        <div className="input-div">
          <label htmlFor="last_name">Enter Last Name</label>
          <input
            type="text"
            id="last_name"
            onChange={onChangeLastName}
            value={lastName}
          />
        </div>
        <div className="input-div">
          <label htmlFor="phone">Enter Phone Number</label>
          <input
            type="text"
            id="phone"
            onChange={onChangeNumber}
            value={phone}
          />
        </div>
        <button type="button" className="add-btn" onClick={onAddDetails}>
          Add
        </button>
      </form>
    </div>
  )
}

export default CustomerForm
