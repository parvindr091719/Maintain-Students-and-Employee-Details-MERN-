import React from 'react';
import './App.css';
import Inputstudents from './components/Inputstudent';
import Liststudent from './components/Liststudent';

function App() {
  return (
    <div className="App">
      <h1>Maintain Students & Employees Details</h1>
      <Inputstudents/>
      <Liststudent/>
    </div>
  );
}

export default App;
