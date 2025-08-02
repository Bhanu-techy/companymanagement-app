import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {doctorDetails} from '../Data'

import 'reactjs-popup/dist/index.css'

import './index.css'

const DoctorDetails = () => {
  const [details, setDetails] = useState({})
  const [submit, setSubmit] = useState(false)
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [showerrormsg, setError] = useState(false)
  const {id} = useParams()

  const onClickBtn = event => {
    event.preventDefault()
    if (username === '' || email === '' || date === '') {
      setError(true)
    } else {
      setSubmit(true)
      setError(false)
    }

    localStorage.setItem('Name', JSON.stringify(username))
    localStorage.setItem('Email', JSON.stringify(email))
    localStorage.setItem('dataTime', JSON.stringify(date))
  }

  const onChangeDate = event => {
    setDate(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeMail = event => {
    setEmail(event.target.value)
  }
  console.log(submit)

  useEffect(() => {
    const getDoctorDetails = () => {
      const selectedDoctor = doctorDetails.find(
        each => each.id.toString() === id.toString(),
      )
      console.log(id)
      setDetails(selectedDoctor || {})
    }
    getDoctorDetails()
  }, [id])

  const {
    name,
    profileImage,
    specialization,
    description,
    availability,
  } = details

  return (
    <div className="doctor-detail-view-container">
      <div className="doctor-detail-img-cont">
        <img src={profileImage} alt={name} className="doctor-detail-img" />
      </div>
      <div className="doctor-detail-description">
        <p className="doctor-name">{name}</p>
        <h1>{specialization}</h1>
        <p className="doctor-description">{description}</p>
        <p className="status">
          Availability Status :{' '}
          <span className="status-value">{availability}</span>
        </p>

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button className="book-btn" type="button">
                Book Appointment
              </button>
            }
          >
            {submit ? (
              <div className="submition-success-view">
                <p>Appointment Booked</p>{' '}
              </div>
            ) : (
              <form className="form" onSubmit={onClickBtn}>
                <h1 className="form-head">Fill the Form to Book Appointment</h1>
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={username}
                    placeholder="Patient Name"
                    onChange={onChangeName}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={onChangeMail}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="datetime">Date&Time</label>
                  <input
                    id="datetime"
                    type="datetime-local"
                    className="datetime-input"
                    onChange={onChangeDate}
                  />
                </div>
                {showerrormsg && (
                  <p className="errormsg">*Please provide details completely</p>
                )}
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            )}
          </Popup>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
