import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import './index.css'

const CustomerDetails = () => {
  const [details, setDetails] = useState({})
  const [addresses, setAddresses] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(
        `https://apibackend-production-a519.up.railway.app/api/customers/${id}/addresses`,
      )
      .then(response => {
        const data = response.data.map(each => ({
          id: each.id,
          firstName: each.first_name,
          lastName: each.last_name,
          phoneNumber: each.phone_number,
          addressDetails: each.address_details,
          state: each.state,
          city: each.city,
          pinCode: each.pin_code,
        }))
        setAddresses(data)
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
  }, [id])

  useEffect(() => {
    addresses.length > 0 ? setDetails(addresses[0]) : null
  })

  console.log(addresses)

  const {firstName, lastName, phoneNumber} = details
  return (
    <div className="customer-detail-cont">
      <div className="customer-detail">
        <h1 className="heading">Details</h1>
        <p className="para">
          First Name : <span>{firstName}</span>
        </p>
        <p className="para">
          Last Name : <span>{lastName}</span>
        </p>
        <p className="para">
          Phone Number : <span>{phoneNumber}</span>
        </p>
      </div>

      <ul className="customer-detail-list-cont">
        <h1 className="heading">Addresses</h1>
        {addresses.map(each => (
          <li key={each.id}>
            <p>{each.addressDetails}</p>
            <p>{each.city}</p>
            <p>{each.state}</p>
            <p>{each.pinCode}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomerDetails
