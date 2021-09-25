import React from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Next Js</Link>
        </li>
        <li>Something</li>
      </ul>
    </>
  );
};

export default NewsPage;
