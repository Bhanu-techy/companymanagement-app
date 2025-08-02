import DoctorsList from '../DoctorsList'
import Header from '../Header'
import {doctorsList} from '../Data'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <ul className="ullist">
        {doctorsList.map(each => (
          <DoctorsList key={each.id} details={each} />
        ))}
      </ul>
    </div>
  </div>
)

export default Home
