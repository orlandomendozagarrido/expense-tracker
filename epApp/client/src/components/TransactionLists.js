import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';


export const TransactionLists = () => {
    const { transactions } = useContext(GlobalContext);


	return (

     <>

       <h4>History</h4>
     
         <ul className="list">
           {transactions.map(transaction => (<Transaction key={transaction.id}
            transaction={transaction} />))}

         </ul>
     
     </>

 )
}

