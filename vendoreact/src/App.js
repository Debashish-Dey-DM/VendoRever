import logo from './logo.svg';
//import './App.css';
import { UserHome } from './Components/UserHome';
import UserList from './Components/UserList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
function App() {
  return (
    <div className="App">
      {/* <UserHome/> */}
     
      
      <Router>
        <Switch>
          <Route path="/user/Homepage" component={UserHome} />
          <Route path="/user/UserList" component={UserList} />
          <Route path="/Signup" component={Signup} />
          <Route path="/SignIn" component={SignIn} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
