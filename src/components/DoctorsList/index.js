import {Link} from 'react-router-dom'
import './index.css'

const DoctorsList = props => {
  const {details} = props
  const {name, specialization, profileImage, availability, id} = details
  const statuscss = availability === 'Available Today' ? 'greenCss' : 'redCss'

  return (
    <Link to={`/doctor/${id}`} className="link">
      <li className="card">
        <div className="img-container">
          <img src={profileImage} alt={name} className="doctor-img" />
        </div>
        <div>
          <p className="name">{name}</p>
          <h1 className="specialization">{specialization}</h1>
          <p className={`availability ${statuscss}`}>{availability}</p>
        </div>
      </li>
    </Link>
  )
}

export default DoctorsList
