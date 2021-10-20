import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Home/Login/Login';
import AuthProvider from './context/AuthProvider'
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/Home/Services/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import Testimonial from './Pages/Home/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;