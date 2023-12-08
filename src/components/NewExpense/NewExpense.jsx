import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

  const [showExpenseForm, setShowExpenseForm] = useState(false)
   
    const newExpenseData = (data)=> {
                
      //  console.log(data)
       props.readExpenseData(data)
     }
  
 const formHandler = () => {
  setShowExpenseForm(true)
 }

  return (
    <div className='new-expense'>

          {!showExpenseForm  && <button onClick={formHandler}>Add New Expense</button>}
   { showExpenseForm &&  <ExpenseForm sendData={newExpenseData} setShowExpenseForm={setShowExpenseForm}/> }
 
    </div>
  )
}

export default NewExpense
