import React, { useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch;
  const {
    sendRequest,
    status,
    error,
    data: quote,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote {...quote} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
