import React from 'react';
import { useParams } from 'react-router';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <p>{quoteId}</p>
    </>
  );
};

export default QuoteDetail;
