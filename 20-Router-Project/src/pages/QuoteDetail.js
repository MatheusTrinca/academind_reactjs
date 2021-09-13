import React from 'react';
import { useParams, Route } from 'react-router';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
