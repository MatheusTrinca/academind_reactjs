import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ addExpenseData }) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    addExpenseData(expenseData);
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          setShowForm={setShowForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={() => setShowForm(true)}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
