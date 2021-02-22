import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Intro from './components/Intro';
import Login from './components/Login';
import Settings from './components/Settings';
import ModalWrapper from './components/ModalWrapper';
import MemberList from './components/MemberList';

const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ modalContent, setModalContent ] = useState(<Login setModalOpen={setModalOpen} setIsLoggedIn={setIsLoggedIn} />);

  axios.defaults.baseURL = 'http://localhost:4000';

  return (
    <Router>
      <div className="App">
        <Header setModalContent={setModalContent} setModalOpen={setModalOpen} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <ModalWrapper modalOpen={modalOpen} setModalOpen={setModalOpen} content={modalContent} />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/main" component={Main} />
          <Route path="/members" render={() =>
            <MemberList setModalContent={setModalContent} modalOpen={modalOpen} setModalOpen={setModalOpen} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/settings" component={Settings} />
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
