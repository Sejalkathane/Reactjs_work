import "./ExpenceDate.css";
import React from "react";

const ExpenceDate = (props) => 
{
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { month: "2-digit" });

  return (
    <div className="date">
      <div>
        {day} {month} {year}
      </div>
    </div>
  );
};
export default ExpenceDate;
