import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserFriends } from "react-icons/fa";

import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header><h1><FaUserFriends/>USER ONBOARDING</h1>
              <h2>A place to get onboard.</h2>
      </header>
      <UserForm/>
    </div>
  );
}

export default App;
