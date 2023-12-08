import React, { useState } from "react";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
 
const dummyData = [
  {
    id : "exp1",
    date : new Date(2020,3,18),
    item : "New Desk (Wooden)",
    price : 510.38
 },
 {
  id : "exp2",
  date : new Date(2020,8,21),
  item : "New TV",
  price : 65.38
 },

 {
  id : "exp3",
  date : new Date(2021,8,21),
  item : "New TV",
  price : 50.38
 },

 {
   id : "exp4",
   date : new Date(2022,5,24),
   item : "New Laptop",
   price : 470.38
},
{
 id : "exp5",
 date : new Date(2023,6,24),
 item : "New Sofa",
 price : 750.38
},
{
 id : "exp6",
 date : new Date(2023,8,21),
 item : "New Mobile",
 price : 70.38
},
{
 id : "exp7",
 date : new Date(2023,9,11),
 item : "New Home",
 price : 450.38
}


];

function App() {
  
  const [expenseData,setExpenseData] =useState(dummyData)

const readExpenseData = (data) =>{

  // console.log(data) 
    
  setExpenseData(prev => [data,...prev])

}


  return (
    <div>
      <NewExpense readExpenseData = {readExpenseData}/>
      <Expenses expenseData={expenseData} />
     

    </div>
  );
}

export default App;
