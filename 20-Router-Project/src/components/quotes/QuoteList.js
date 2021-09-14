import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const location = useLocation();
  const history = useHistory();

  const queryParam = new URLSearchParams(location.search);

  const isAscendingSort = queryParam.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isAscendingSort);

  const changeSortingHandler = () => {
    history.push({
      location: location.pathname,
      search: `?sort=${!isAscendingSort ? 'asc' : 'desc'}`,
    });

    // history.push(
    //   `${location.pathname}?sort=${!isAscendingSort ? 'asc' : 'desc'}`
    // );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sorting {!isAscendingSort ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
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
