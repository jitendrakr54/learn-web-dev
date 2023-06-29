import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// function ExpenseItem(props) {
//   const clickHandler = () => {
//     console.log("Clicked!!!");
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change title</button>
//     </Card>
//   );
// }

// function ExpenseItem(props) {
//   let title = props.title;

//   const clickHandler = () => {
//     console.log("Clicked!!!");
//     title = "Updated";
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change title</button>
//     </Card>
//   );
// }

// function ExpenseItem(props) {
//   const [title, setTitle] = useState(props.title);

//   const clickHandler = () => {
//     setTitle("Updated!");
//     console.log(title);
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change title</button>
//     </Card>
//   );
// }

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
