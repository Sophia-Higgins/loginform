import React from 'react';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route path='/' exact={true}>
              <div className='container d-flex align-items-center flex-column'>
                <LoginForm />
              </div>
            </Route>
            <Route path='/login'>
              <div className='container d-flex align-items-center flex-column'>
                <LoginForm />
              </div>
            </Route>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
