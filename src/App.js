import React from 'react';
import './App.css';
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
          <Switch>
            <Route path='/' exact={true}>
              <Header />
              <div className='container d-flex align-items-center flex-column'>
                <LoginForm />
              </div>
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
