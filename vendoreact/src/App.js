import logo from './logo.svg';
//import './App.css';
import { UserHome } from './Components/UserHome';
import UserList from './Components/UserList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import { Test } from './Components/Test';
import { Protected } from './Components/Protected';
import { FriendList } from './Components/FriendList';
import { FriendRequest } from './Components/FriendRequest';
import { SentRequest } from './Components/SentRequest';
import { Creategroup } from './Components/groups/Creategroup';
import { Group } from './Components/groups/Group';
function App() {
  return (
    <div className="App">
      {/* <UserHome/> */}
     
      
      <Router>
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/user/Homepage" >
            <Protected Cmp={UserHome}/>
          </Route>
          <Route path="/user/UserList" >
            <Protected Cmp={UserList}/>
          </Route>

          <Route path="/test" component={Test} />
          <Route path="/user/FriendReq" >
            <Protected Cmp={FriendRequest}/>
          </Route>
          <Route path="/user/Friendlist" >
            <Protected Cmp={FriendList}/>
          </Route>
          <Route path="/user/SentRequest" >
            <Protected Cmp={SentRequest}/>
          </Route>
          <Route path="/user/createGroup" >
            <Protected Cmp={Creategroup}/>
          </Route>
          <Route  path="/user/group/:id">
              <Protected Cmp={Group}/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
