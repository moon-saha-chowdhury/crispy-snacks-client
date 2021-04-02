import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProducts from './Components/AddProducts/AddProducts';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import ManageProducts from './Components/ManageProducts/ManageProducts'
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] =useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser ]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/snack/:snackId">
            <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
            <AddProducts/>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProducts/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
