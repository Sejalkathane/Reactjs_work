import "./Expences.css"
import ExpenceItem from "./ExpenseItem";
import React from 'react'


const Ex=(props) =>{
    return(
        <div className="expences">
           {
              props.item.map(
                expense=>(
                  <ExpenceItem
                  date={expense.date}
                  title={expense.title}
                  price={expense.price}/>
                )
              )

           }
        </div>
    );
}

export default Ex