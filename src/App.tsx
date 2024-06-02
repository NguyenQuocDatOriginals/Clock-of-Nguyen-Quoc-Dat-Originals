import React from 'react';
import './App.scss';
import Clock from './clock';

const App: React.FC = () => {
  return (
    <div className="app">
      <Clock />
    </div>
  );
};

export default App;