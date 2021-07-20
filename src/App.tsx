import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import Homepage from './pages/Homepage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Strap from './components/Strap'



function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Redirect from='*' to='/'/>
      </Switch>
    </Router>
  );
}

export default App;
