import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {

const auth = useSelector(state => state.auth.isAuthenticated);
console.log(auth);
//{auth && <Auth />}

  return (
    <Fragment>
      <Header />
        {!auth 
          ? <Auth /> 
          : <UserProfile/>
        }
      <Counter />
    </Fragment>
  );
}

export default App;
