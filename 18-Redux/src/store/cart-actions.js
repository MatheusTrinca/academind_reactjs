import { uiSliceActions } from '../store/ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://academind-react-c9abc-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Error fetching cart data');
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          status: 'error',
          title: 'Error!...',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiSliceActions.showNotification({
        status: 'pending',
        title: 'Sendind...',
        message: 'Sending cart data',
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        'https://academind-react-c9abc-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Error sending data');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: 'success',
          title: 'Success!...',
          message: 'Sending cart data successfully!',
        })
      );
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          status: 'error',
          title: 'Error!...',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
