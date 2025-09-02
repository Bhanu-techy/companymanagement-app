import {useEffect, useState} from 'react'
import axios from 'axios'
import './index.css'

function CustomerForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')

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
    
    const url =
      'https://apibackend-production-a519.up.railway.app/api/customers/'
    axios
      .post(url, userDetails,{
        header : {"Content-type" : "application/json/",}
      })
      .then(response => {
        console.log('added succesfully')
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })

    setFirstName("")
    setLastName("")
    setPhone("")
  }

  return (
    <div className="form-container">
      <form>
        <h1 className="form-heading">Add Details</h1>
        <div className="input-div">
          <label htmlFor="first_name">Enter First Name</label>
          <input type="text" id="first_name" onChange={onChangeFirstName} />
        </div>
        <div className="input-div">
          <label htmlFor="last_name">Enter Last Name</label>
          <input type="text" id="last_name" onChange={onChangeLastName} />
        </div>
        <div className="input-div">
          <label htmlFor="phone">Enter Phone Number</label>
          <input type="text" id="phone" onChange={onChangeNumber} />
        </div>
        <button type="button" className="add-btn" onClick={onAddDetails}>
          Add
        </button>
      </form>
    </div>
  )
}

export default CustomerForm
