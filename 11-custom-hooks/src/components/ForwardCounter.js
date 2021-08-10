import useCounter from '../hooks/useCounter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter('sum');

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
