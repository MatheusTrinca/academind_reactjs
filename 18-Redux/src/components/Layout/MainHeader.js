import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = props => {
  const dispatch = useDispatch();

  const cartShowHandler = () => {
    dispatch(uiSliceActions.showCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartShowHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
