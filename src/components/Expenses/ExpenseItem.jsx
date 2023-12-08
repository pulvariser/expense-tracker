import React from 'react';
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate';


const ExpenseItem = ({expenseData}) => {


  return (
    <div className='expense-item'>
     <ExpenseDate expenseData={expenseData}/>

      <div className='expense-item__description'><h2>{expenseData.item}</h2></div>

      <div className='expense-item__price'>$ {expenseData.price}</div>
    </div>
  )
}
 
export default ExpenseItem;
