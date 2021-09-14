import React from 'react';
import { useParams, Route, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is awesome!' },
  { id: 'q2', author: 'Maximillian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  console.log(match);

  const quote = DUMMY_QUOTES.find(q => q.id === quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote {...quote} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
