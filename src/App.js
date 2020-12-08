import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer'; 
//import Auth_register from './Components/Auth/Auth_register'; 


import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import Home from './Components/Home';
import {Users} from './Components/Users';
import {About} from './Components/About';



function App() {
  return (
    <>
      {/* <Helmet>
        <title>{ TITLE }</title>
      </Helmet> */}
    <Router>
    <Navibar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/about" component={About}/>
      {/* <Route path="/register" component={Auth_register}/> */}
    </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
