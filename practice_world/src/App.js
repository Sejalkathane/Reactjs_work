import React,{useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense';

import Expences from './components/Expences'

let expenses_data =[
  {
    id:'e1',
    title:'School Fee',
    price:250,
    date:new Date(2021,5,12)
  },

  {
    id:'e2',
    title:'College Fee',
    price:350,
    date:new Date(2021,10,12)
  },

  {
    id:'e3',
    title:'Car Service',
    price:500,
    date:new Date(2021,12,12)
  },

  {
    id:'e4',
    title:'Books ',
    price:100,
    date:new Date(2021,15,12)
  },

];


const App=() =>{
  // Date object in js
  // let D = new Date(2023, 6, 16);

    const [expenses,setExpenses]=useState(expenses_data);
    const addExpenseHandler=(expense)=>
    {
      const updateEx=[expense,...expenses];
      setExpenses(updateEx);
    }
  
  
 
  return (
   <>
    < NewExpense  onAddExpense={addExpenseHandler}/>
     <Expences item={expenses}/>
   </>
  );
}

export default App;