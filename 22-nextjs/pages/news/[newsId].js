import React from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const { newsId } = router.query;
  // Send request to API looking for news with this ID

  return <h1>Detail News {newsId}</h1>;
};

export default Detail;

// 324
