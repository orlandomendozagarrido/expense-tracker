import React from 'react';
import { Header } from './components/Headers.js';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionLists } from './components/TransactionLists.js';
import { AddTransaction } from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState';
import './scss/app.scss';
//import Slider from './Slider.js';
//import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionLists />
        <AddTransaction />
      </div>
    </GlobalProvider>

  );
}

export default App;
