import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Intro from './components/Intro';
import Login from './components/Login';
import ModalWrapper from './components/ModalWrapper';
import MemberList from './components/MemberList';

const App = () => {
  const [ loginOpen, setLoginOpen ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <Router>
      <div className="App">
        <Intro />
        <ModalWrapper
          modalOpen={loginOpen}
          setModalOpen={setLoginOpen}
          content={<Login setLoginOpen={setLoginOpen} setIsLoggedIn={setIsLoggedIn} />} />
        <Header setLoginOpen={setLoginOpen} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/members" component={MemberList} />
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
