import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Insurance } from './ui/pages/Insurance';
import CreateInsuranceForm from './ui/widgets/CreateInsuranceForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Insurance />
        <CreateInsuranceForm />
      </header>

    </div>
  );
}

export default App;
