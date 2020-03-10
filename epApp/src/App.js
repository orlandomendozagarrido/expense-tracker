import React from 'react';
import { Header }from './components/Headers.js';
import { Balance }from './components/Balance.js';
import { IncomeExpenses }from './components/IncomeExpenses.js';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
