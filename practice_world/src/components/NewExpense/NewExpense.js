import React from 'react';
import './newExpense.css'
import ExpenseForm from './Expernse_form';

const NewExpense = (props) =>{
    const saveExpenceData=(enterExpenseData)=>{
        const expenceDate={
            //copy object
            ...enterExpenseData,
            id:Math.random().toString()
        }
        console.log(expenceDate);
        props.onAddExpense(expenceDate);

    }
    return(
          <div className='new-expense'>
           <ExpenseForm 
           onsaveExpenceData={saveExpenceData}
           />
          </div>
    );
}

export default NewExpense;
