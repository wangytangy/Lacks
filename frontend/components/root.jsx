import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/sessions_form_container';
import Splash from './greeting/splash';
import HomeContainer from './home/home_container';

const Root = (props) => {

  function _redirectIfLoggedIn(nextState, replace) {
    if (props.store.getState().session.currentUser) {
      replace("/");
    }
  }

  return(
    <Provider store={ props.store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          //Index splash page
          //background with sign up button
          <IndexRoute component={ Splash }/>
          <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="messages" component={ HomeContainer } />
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
