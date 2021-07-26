import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, setShowForm }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeInputHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={userInput.title}
            type="text"
            onChange={changeInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeInputHandler}
            name="amount"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeInputHandler}
            name="date"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setShowForm(false)} type="submit">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
