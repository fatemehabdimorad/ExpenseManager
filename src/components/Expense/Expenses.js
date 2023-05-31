import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}
export default Expenses;
