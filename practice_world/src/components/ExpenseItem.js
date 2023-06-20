import "./ExpenseItem.css";
import ExpenceDate from './ExpenceDate'
import React,{useState} from 'react'




const ExpenseItem=(props) =>{
//     const[newtitle,setnewTitle] =useState("");
//    const[title,setTitle] =useState(props.title);

//     const clickHandler=()=>{
//     //   alert("Clicked")
//         setTitle(newtitle);
//     }
    
//     const changeHandler=(event)=>{
//         setnewTitle(event.target.value);
    // }
    
    return (
        <>
            <div className="Item">
               <ExpenceDate date={props.date}/>
                <div className="material">
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className="price">${props.price}</div>
                </div>
                {/* <input type="text" value={newtitle} onChange={changeHandler}/>
                <button onClick={clickHandler}>Change title</button> */}
            </div>
        </>


    );
}

export default ExpenseItem;
