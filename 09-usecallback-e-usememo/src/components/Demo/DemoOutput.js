import React from 'react';
import Paragraph from './Paragraph';

const DemoOutput = props => {
  console.log('DEMO OUTPUT RENDERING');
  return <Paragraph />;
};

export default React.memo(DemoOutput);
