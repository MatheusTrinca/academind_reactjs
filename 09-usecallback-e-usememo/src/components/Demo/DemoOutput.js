import React, { useMemo } from 'react';
import Paragraph from './Paragraph';

const DemoOutput = props => {
  const ordered = useMemo(() => {
    return props.list.sort((a, b) => {
      console.log('SORTING');
      return a - b;
    });
  }, [props.list]);

  console.log('DEMO OUTPUT RENDERING');
  return (
    <>
      {ordered.map(num => (
        <div key={num}>{num}</div>
      ))}
      <Paragraph />
    </>
  );
};

export default React.memo(DemoOutput);
