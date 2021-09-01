import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const increaseAmountHandler = () => {
    dispatch({ type: 'INCREASE', payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseAmountHandler}>Increase 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
