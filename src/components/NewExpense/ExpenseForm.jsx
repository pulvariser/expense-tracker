import React, { useState } from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {

  const [title,setTitle] = useState("")
  const [amount,setAmount] = useState("")
  const [date,setDate] = useState("")
      
        const updateTitle = (e)=> {
            setTitle(e.target.value)
        };

    const handelSubmit = (e)=>{
       e.preventDefault();
    
       const data = {
        id: Math.random().toString(),
      item:title,
      price:amount,
      date:new Date(date) 
           
       }
          // console.log(data)        
       props.sendData(data)
      // console.log(title,amount,date)
      setTitle("")
      setAmount(0)
      setDate("")

    setTimeout(()=>{
      alert("Expense Added To The Matching Year")
    },500)
      // props.setShowExpenseForm(false)
    };

  return (
    <form onSubmit={handelSubmit}>

      <div className='new-expense__controls' >
            <div  className='new-expense__control'>
              <label >Title</label>
              <input type="text" onChange={updateTitle} name="" value={title} placeholder='Add Item' required/> 
             </div>

             <div  className='new-expense__control'>
              <label >Amount</label>
              <input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder='Add Amount' name="" required/> 
             </div>
           

             <div  className='new-expense__control'>
              <label>Date</label>
              <input type="date" onChange={(e)=>setDate(e.target.value)} value={date}/> 
             </div>


      </div>
           
          <div className='new-expense__actions'>
              <button type="button" onClick={() =>props.setShowExpenseForm(false)}>Cancel</button>
              <button type="submit">Add Expense</button> 
        </div>        
    </form>
  )
} 

export default ExpenseForm
