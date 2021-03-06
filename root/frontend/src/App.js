import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.scss';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './components/utilities/PrivateRoutes';
import Landing from './components/Landing';
import Explore from './components/Explore';
import Signup from './components/Signup';
import Login from './components/Login';
import CreateGroup from './components/CreateGroup';
import UserProfile from './components/UserProfile';
import GroupProfile from './components/GroupProfile';

function App() {
   return (
      <AuthProvider>
         <Router>
            <div className="App">
               <Route exact path='/' component={Landing} />
               <Route exact path='/explore' component={Explore} />
               <Route exact path='/signup' component={Signup} />
               <Route exact path='/login' component={Login} />
               <PrivateRoute path='/userprofile/:userId' component={UserProfile} />
               <PrivateRoute path='/create-group/:userId' component={CreateGroup} />
               <PrivateRoute path='/group-profile/:groupId' component={GroupProfile} />
            </div>
         </Router>
      </AuthProvider>
   );
}

export default App;
