import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Header/Login';
import 'bootstrap/dist/css/bootstrap.css'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Login/>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* 기타 페이지 */}
          <Route
            render={({ location }) => (
              <div>
                <h3>존재하지 않는 페이지 {location.pathname}</h3>
              </div>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
