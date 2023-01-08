import React, {useState} from "react";

export default function TextForm(props) {

const [text,setText]=useState('Enter text hear2');


const handleUpClick=()=>{
  console.log("Uppercase click");
  let newText=text.toUpperCase();
  setText(newText);
}

const handleOnChange=(event)=>{
  console.log("On Change");
   setText(event.target.value)
}

const changeLower=()=>{
  console.log("Change it to lower");
  let newText=text.toLowerCase();
  setText(newText);
}

const clear=()=>{
  let newText=' ';
  setText(newText);
}


const capitaliz=()=>{
   let newText=text.charAt(0).toUpperCase() + text.slice(1);

   setText(newText);
}



  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" classNameName="form-label">
          Text
        </label> */}
        <textarea className="form-control p-4 " onChange={handleOnChange} value={text} id="myBox" rows="9"></textarea>
      </div>
      <button type="button" onClick={handleUpClick}  className="btn btn-outline-success p-3 m-3 ">Convert to upperCase</button>
      <button type="button"  onClick={changeLower}  className="btn btn-outline-danger p-3 m-3 ">Convert into lowerCase</button>
      <button type="button"  onClick={clear}  className="btn btn-outline-dark p-3 m-3 ">Clear</button>
      <button type="button"  onClick={capitaliz}  className="btn btn-outline-info p-3 m-3 ">Capitaliz</button>
     
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words,{text.length} character</p>
  <p>{0.008*text.split("  ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
    </div>
    </>

  );
}
