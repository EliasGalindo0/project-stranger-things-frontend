import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <StrangerThings />
      {process.env.REACT_APP_DEV === 'dev' && <h1>Em desenvolvimento</h1>}
    </div>
  );
}

export default App;
