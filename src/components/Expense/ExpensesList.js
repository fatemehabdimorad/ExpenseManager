import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItems";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">No Expense Found!</h3>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
      ))}
    </ul>
  );
};
export default ExpensesList;
