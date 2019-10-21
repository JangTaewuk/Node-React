import React from 'react';
import './App.css';
import CountReduxDisplay from './ex1/CountReduxDisplay';
import CountReduxButton from './ex1/CountReduxButton';

function App() {
  return (
    <div className="App">
      <div>
        <CountReduxDisplay></CountReduxDisplay>
        <CountReduxButton></CountReduxButton>
      </div>
    </div>
  );
}

export default App;