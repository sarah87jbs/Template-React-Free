import React from 'react';
import YearDropdown from './components/YearDropdown';
import { start } from '@popperjs/core';

function App() {
  return (
    <div className="App">
      <h1>Exemple avec liste déroulante d'années</h1>
      <YearDropdown />
    </div>
  );
}

export default App;