import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showNewExpenseScreen, setShowNewExpenseScreen] = useState("false");
  const showNewExpense = () => {
    setShowNewExpenseScreen("true");
  };

  const cancelNewExpense = () => {
    setShowNewExpenseScreen("false");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowNewExpenseScreen("false");
  };

  return (
    <div className="new-expense">
      {showNewExpenseScreen === "true" && (
        <ExpenseForm
          onCancelNewExpense={cancelNewExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {showNewExpenseScreen === "false" && (
        <button onClick={showNewExpense}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
