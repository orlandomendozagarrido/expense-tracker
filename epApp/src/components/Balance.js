import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export const Balance = () => { 
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const { Shaker } = useContext(GlobalContext);
   
    const onShake = e => {
    e.preventDefault()

    const newBalance = {
        
    };

    Balance(newBalance);

}


	return (

     <div className="balance">
       <h4>Your Balance Is</h4>
       <h1 onShake={onShake}>${total}</h1>
     </div>

 )
}

