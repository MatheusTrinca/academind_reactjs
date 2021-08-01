import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import CartProvider from './components/Contexts/CartProvider';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isModalShow, setIsModalShow] = useState(false);

  const showModalHandler = () => {
    setIsModalShow(true);
  };

  const hideModalHandler = () => {
    setIsModalShow(false);
  };

  return (
    <CartProvider>
      {isModalShow && <Cart onClose={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
