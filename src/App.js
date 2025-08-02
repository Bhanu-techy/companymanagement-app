import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import DoctorDetails from './components/DoctorDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/doctor/:id" component={DoctorDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
