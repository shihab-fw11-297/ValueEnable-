import './App.css';
import Signup from './Components/authentication/Signup';
import SignIn from './Components/authentication/Signin';
import { Switch, Route, Redirect } from "react-router-dom";
import CustomerDashbord from './Components/client/CustomerDashbord';
import ModeratorDashbords from './Components/moderator/ModeratorDashbords';
import AdminDashbord from './Components/admin/AdminDashbord';
import { useContext } from 'react';
import Home from './Components/Home/Home';
import { AuthContext } from "../src/context/AuthContext"
import Header from './Components/Header/Header';

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {
            auth.role === "admin" ? <AdminDashbord /> :
              auth.role === "customer" ? <CustomerDashbord /> :
                auth.role === "moderator" ? <ModeratorDashbords /> :
                  <Home />
          }
        </Route>

        <Route path='/login'>
          {
            auth.token !== "" ? <Redirect to="/" /> : <SignIn />
          }
        </Route>


        <Route path="/register" >
          <Signup />
        </Route>

        <Route path="/home" >
          <Home />
        </Route>

        <Route path='/admin'>
          {
            auth.role === "admin" ? <AdminDashbord /> : <SignIn />
          }
        </Route>

        <Route path='/customer'>
          {
            auth.role === "customer" ? <CustomerDashbord /> : <SignIn />
          }
        </Route>

        <Route path='/moderator'>
          {
            auth.role === "moderator" ? <ModeratorDashbords /> : <SignIn />
          }
        </Route>

      </Switch>
    </div>
  );
}

export default App;
