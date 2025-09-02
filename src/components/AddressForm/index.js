import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AddressFormPage from '../AddressFormPage'
import './index.css'

const AddressForm = () => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [details, setDetails] = useState({})
  const {id} = useParams()

  const onChangeAddress = event => {
    setAddress(event.target.value)
  }

  const onChangeCity = event => {
    setCity(event.target.value)
  }
  const onChangeState = event => {
    setState(event.target.value)
  }

  const onChangePincode = event => {
    setPinCode(event.target.value)
  }

  const onAddDetails = event => {
    event.preventDefault()
    const addressDetails = {
      address_details: address,
      city : city,
      state : state,
      pin_code: pinCode,
    }
    const details = {
      address,
      city,
      state,
      pinCode,
    }
    setDetails(details)

    const url = `https://courageous-wonder-production.up.railway.app/api/customers/${id}/addresses`
    axios
      .post(url, addressDetails)
      .then(response => {
        console.log(`${addressDetails}`)
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
  }

  return (
    <AddressFormPage
      details={details}
      onChangeAddress={onChangeAddress}
      onChangeCity={onChangeCity}
      onChangeState={onChangeState}
      onChangePincode={onChangePincode}
      onAddDetails={onAddDetails}
    />
  )
}

export default AddressForm
