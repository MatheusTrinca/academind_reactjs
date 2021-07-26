import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter(
    item => item.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        {filteredItems.length > 0 ? (
          filteredItems.map(({ id, ...otherProps }) => (
            <ExpenseItem key={id} {...otherProps} />
          ))
        ) : (
          <h4 className="expenses__not-found">No expenses found!</h4>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
