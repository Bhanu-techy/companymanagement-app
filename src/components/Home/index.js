import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './index.css'

const Home = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios
      .get('https://apibackend-production-a519.up.railway.app/api/customers/')
      .then(response => {
        const data = response.data.map(each => ({
          id: each.id,
          firstName: each.first_name,
          lastName: each.last_name,
          phoneNumber: each.phone_number,
        }))
        setCustomers(data)
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
  }, [])
  console.log(customers)

  return (
    <div>
      <div className="home-container">
        <div className="head-container">
          <h1 className="heading">Customer List</h1>
          <Link to="/add/customer/form">
            <button type="button" className="add-cust">
              Add Customer
            </button>
          </Link>
        </div>
        <ul>
          {customers.map(customer => (
            <Link to={`/customer/${customer.id}`} className="link">
              <li key={customer.id}>
                {customer.firstName} {customer.lastName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
