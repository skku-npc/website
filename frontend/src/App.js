import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Intro from './components/Intro';
import Settings from './components/User/Settings';
import ResetPassword from './components/User/ResetPassword';
import ModalWrapper from './components/ModalWrapper';
import MemberList from './components/MemberList';
import Calendar from './components/Calendar';
import Study from './components/Study';

const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ modalContent, setModalContent ] = useState(null);

  axios.defaults.baseURL = 'http://localhost:4000';

  return (
    <Router>
      <div className="App">
        <Header setModalContent={setModalContent} setModalOpen={setModalOpen} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <ModalWrapper modalOpen={modalOpen} setModalOpen={setModalOpen} content={modalContent} />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/main" component={Main} />
          <Route path="/members/:year" render={({ match, history }) =>
            <MemberList match={match} history={history} setModalContent={setModalContent} setModalOpen={setModalOpen} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/calendar/:view/:date" render={({ match, history }) =>
            <Calendar match={match} history={history} setModalContent={setModalContent} setModalOpen={setModalOpen} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/study/:class/:index?" render={({ match, history }) =>
            <Study match={match} history={history} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/user/settings" component={Settings} />
          <Route path="/user/resetPassword/:passwordResetToken" component={ResetPassword} />
          <Route
            render={({ location }) => (
              <div style={{margin: '150px 0', textAlign: 'center'}}>
                <h1>존재하지 않는 페이지입니다!</h1>
                <h2>{location.pathname}</h2>
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
