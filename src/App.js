import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header><h1>Register!</h1></header>
      <UserForm/>
    </div>
  );
}

export default App;
