import React, { useState } from 'react';


const ExpenseForm = (props) => {
    const [enterTitle,setEnterTitle]=useState('');
    const [enterPrice,setEnterPrice]=useState('');
    const [enterDate,setEnterDate]=useState('');




    const titleChange =(event)=>
    {
        setEnterTitle(event.target.value);
      
    };

    const priceChange =(event)=>
    {
        setEnterPrice(event.target.value);
    };

    const dateChange =(event)=>
    {
        setEnterDate(event.target.value);
    };

    const submitHandler=(event)=>{
        //form not refresh it close there 
           event.preventDefault();

           const expenseData={
            title:enterTitle,
            price:enterPrice,
            date:new Date(enterDate)
        }
        // console.log(expenseData);

        setEnterTitle('');
        setEnterPrice('');
        setEnterDate('');

        //clild to parent
        props.onsaveExpenceData(expenseData);
    };

  



    return(
       <form onSubmit={submitHandler}>
        <div>
        <div>
            <label htmlFor="">TiTle</label>
            <input value={enterTitle} type="text" onChange={titleChange}/>
        </div>

        <div>
            <label htmlFor="">Price</label>
            <input value={enterPrice} type="number" min="0.01" step="0.01" onChange={priceChange} />
        </div>

        <div>
            <label htmlFor="">Date</label>
            <input value={enterDate} type="date" onChange={dateChange} />
        </div>

        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
       </form>
    );
}

export default ExpenseForm;
