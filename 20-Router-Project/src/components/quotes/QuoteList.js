import { Fragment } from 'react';
import { useHistory } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = props => {
  const history = useHistory();
  const changeSortingHandler = () => {
    history.push(`/quotes?sort=asc`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sorting Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
