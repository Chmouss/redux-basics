import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const dispatchLogout = () => {
    dispatch(authActions.logout());
  }

  const dispatchLogin = () => {
    dispatch(authActions.login());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          {isAuth 
            ? <button onClick={ dispatchLogout }>Logout</button> 
            : <button onClick={ dispatchLogin }>Login</button> 
          }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
