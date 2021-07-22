import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import Homepage from './pages/Homepage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';



function App() {
  return (
    <Router>
        <Header />
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/account' component={AccountPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Redirect from='*' to='/'/>
    </Router>
  );
}

export default App;
