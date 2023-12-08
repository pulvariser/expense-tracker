import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'


const Expenses = ({expenseData}) => {

   const [filterYear,setFilterYear]=useState("2020")

const updateFilterYear = (year) =>{
  
  // console.log(year)
  setFilterYear(year)
};

let filterRecord = expenseData.filter((exp)=>{
  // console.log(exp.date.getFullYear())
  return exp.date.getFullYear().toString() === filterYear.toString()
})


  return (
    <div className="expenses"> 
      <ExpenseFilter updateFilterYear ={updateFilterYear} filterYear = {filterYear}/>

       <ExpenseChart filterRecord={filterRecord}/>

        {filterRecord.length > 0 ? (
        
        filterRecord.map((value,index) =>{
            return(
                <ExpenseItem expenseData = {value} key = {index}/>
            )         
        })
        ) : (
          <h1 style={{color:"white", textAlign:"center"}}>No Data Found</h1>
        )
       }
    </div>
  )
}
 
export default Expenses
