import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "../NewExpense/ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       ></ExpenseItem>
//     </Card>
//   );
// }

/* function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // return (
  //   <Card className="expenses">
  //     <ExpensesFilter
  //       selected={filteredYear}
  //       onChangeFilter={filterChangeHandler}
  //     />
  //     {filteredExpenses.length === 0 ? (
  //       <p>No expense found!</p>
  //     ) : (
  //       filteredExpenses.map((expense) => (
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItem>
  //       ))
  //     )}
  //   </Card>
  // );

  // return (
  //   <Card className="expenses">
  //     <ExpensesFilter
  //       selected={filteredYear}
  //       onChangeFilter={filterChangeHandler}
  //     />
  //     {filteredExpenses.length === 0 && <p>No expense found!</p>}
  //     {filteredExpenses.length > 0 &&
  //       filteredExpenses.map((expense) => (
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItem>
  //       ))}
  //   </Card>
  // );

  // let expenseContent = <p>No expense found!</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }

  // return (
  //   <Card className="expenses">
  //     <ExpensesFilter
  //       selected={filteredYear}
  //       onChangeFilter={filterChangeHandler}
  //     />
  //     {expenseContent}
  //   </Card>
  // );
}
export default Expenses;
 */

// ******************************************* Rendering lists of data

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}
export default Expenses;
