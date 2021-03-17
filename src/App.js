import React from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
